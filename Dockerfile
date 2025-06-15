# -------- Frontend Build Stage --------
FROM node:18 as frontend-builder

WORKDIR /app/frontend
COPY frontend/ ./
RUN npm install
RUN npm run build

# -------- Backend Build Stage --------
FROM python:3.11-slim

WORKDIR /app

# Install Python dependencies
COPY backend/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy full backend structure (includes routes/, services/, models/, etc.)
COPY backend ./backend

# Copy frontend build into backend container
COPY --from=frontend-builder /app/frontend/dist ./frontend

# Set uvicorn startup command
ENV UVICORN_CMD="uvicorn backend.main:app --host 0.0.0.0 --port 8000"

EXPOSE 8000
CMD bash -c "$UVICORN_CMD"
