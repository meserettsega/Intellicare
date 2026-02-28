@echo off
REM shim for tools that invoke xdg-open on Windows. For example, Vercel CLI sometimes calls
REM xdg-open to open a browser. This script forwards to the Windows `start` command.
start "" %*
