@echo off
TITLE Discord Clone Launcher

echo [1/4] Installing Server Dependencies...
cd server
call npm install --legacy-peer-deps
echo.

echo [2/4] Setting up Database...
call npx prisma db push
call npx prisma generate
echo.

echo [3/4] Installing Client Dependencies...
cd ../client
call npm install --legacy-peer-deps
echo.

echo [4/4] Starting Applications...
echo Server running on Port 4000...
echo Client running on Port 3000...

cd ../server
start "Discord Server" node index.js

cd ../client
start "Discord Client" npm run dev

echo.
echo ===================================================
echo   APPS LAUNCHED IN SEPARATE WINDOWS
echo   Frontend: http://localhost:3000
echo   Backend:  http://localhost:4000
echo ===================================================
pause