# Environment Configuration Guide

## Local Development Setup

### Option 1: Using application-local.properties (Recommended for Development)

1. **Copy the local properties file:**
   ```bash
   cp src/main/resources/application-local.properties.example src/main/resources/application-local.properties
   ```

2. **Edit `application-local.properties`** with your actual credentials:
   ```properties
   DB_USERNAME=your_postgres_username
   DB_PASSWORD=your_postgres_password
   MAIL_USERNAME=your_email@gmail.com
   MAIL_PASSWORD=your_app_password
   ```

3. **Run the application:**
   ```bash
   ./mvnw spring-boot:run
   ```

### Option 2: Using Environment Variables

Set environment variables in your system:

**Windows PowerShell:**
```powershell
$env:DB_USERNAME="postgres"
$env:DB_PASSWORD="your_password"
$env:MAIL_USERNAME="your_email@gmail.com"
$env:MAIL_PASSWORD="your_app_password"
```

**Windows Command Prompt:**
```cmd
set DB_USERNAME=postgres
set DB_PASSWORD=your_password
set MAIL_USERNAME=your_email@gmail.com
set MAIL_PASSWORD=your_app_password
```

## Production Deployment

### Docker Environment Variables
```bash
docker run -e DB_USERNAME=prod_user \
           -e DB_PASSWORD=prod_password \
           -e MAIL_USERNAME=prod_email \
           -e MAIL_PASSWORD=prod_app_password \
           your-app:latest
```

### System Environment Variables
Set the variables at system level or in your deployment platform (Heroku, AWS, etc.).

## Security Notes

- ✅ `application.properties` is safe to commit (no secrets)
- ✅ `application-local.properties` is in `.gitignore` (won't be committed)
- ✅ Credentials are loaded from environment variables or local properties
- ⚠️ Never commit actual credentials to version control
- ⚠️ Change default passwords in production environments

## Default Values

- `DB_USERNAME`: defaults to "postgres" if not set
- `DB_PASSWORD`: **required** - must be set
- `MAIL_USERNAME`: **required** - must be set
- `MAIL_PASSWORD`: **required** - must be set