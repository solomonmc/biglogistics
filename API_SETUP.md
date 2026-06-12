# API Setup Guide

## Installation & Configuration

### Prerequisites
- PHP 7.4+ 
- MySQL 8.0+
- Composer
- Git

### Step-by-Step Setup

#### 1. Clone & Setup
```bash
git clone https://github.com/solomonmc/biglogistics.git
cd biglogistics
git checkout codeigniter-backend
```

#### 2. Install Dependencies
```bash
composer install
```

#### 3. Environment Configuration
```bash
cp .env.example .env
```

Edit `.env` file:
```env
CI_ENVIRONMENT = development

# Database Configuration
database.default.hostname = localhost
database.default.database = biglogistics
database.default.username = root
database.default.password = your_password
database.default.DBDriver = MySQLi
database.default.port = 3306

# JWT Configuration
api.jwt_secret = your-super-secret-jwt-key-change-this
api.jwt_algorithm = HS256
api.jwt_expiration = 86400

# Base URL
app.baseURL = http://localhost:8080
```

#### 4. Create MySQL Database
```bash
mysql -u root -p
CREATE DATABASE biglogistics CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```

#### 5. Run Database Migrations
```bash
php spark migrate
```

#### 6. Seed Demo Data
```bash
php spark db:seed DemoSeeder
```

#### 7. Start Development Server
```bash
php spark serve
```

Server will run at: `http://localhost:8080`

---

## API Testing

### Using Postman

1. **Import Collection**
   - Open Postman
   - Click `Import` → Select `Biglogistics_API.postman_collection.json`
   - Postman will import all endpoints

2. **Authentication**
   - Send `Login` request with demo credentials
   - Copy the `token` from response
   - Set `{{token}}` variable in Postman environment
   - All protected endpoints will now work

3. **Demo Credentials**
   ```
   Admin:     admin@biglogistics.ng / admin123
   Customer:  customer1@biglogistics.ng / customer123
   Driver:    driver1@biglogistics.ng / driver123
   ```

### Using cURL

#### Login
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@biglogistics.ng",
    "password": "admin123"
  }'
```

Response:
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": 1,
      "email": "admin@biglogistics.ng",
      "first_name": "Admin",
      "role": "admin"
    },
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
  }
}
```

#### Get Dashboard (Admin)
```bash
curl -X GET http://localhost:8080/api/admin/dashboard \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

#### Create Shipment (Customer)
```bash
curl -X POST http://localhost:8080/api/shipments \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "pickup_address": "12 Admiralty Way, Lekki",
    "pickup_latitude": 6.4264,
    "pickup_longitude": 3.4298,
    "dropoff_address": "Plot 8 Allen Avenue, Ikeja",
    "dropoff_latitude": 6.6348,
    "dropoff_longitude": 3.3393,
    "package_type": "small_parcel",
    "package_weight": 2.5,
    "package_dimensions": "30x20x15cm",
    "delivery_speed": "express",
    "special_instructions": "Call receiver at gate",
    "distance": 15
  }'
```

#### Track Shipment (Public - No Auth Required)
```bash
curl -X GET http://localhost:8080/api/shipment/track/BL20260612001234
```

---

## Troubleshooting

### Database Connection Error
```
Error: Unable to connect to the database
```
**Solution:**
- Check MySQL is running
- Verify database credentials in `.env`
- Ensure database exists: `SHOW DATABASES;`

### JWT Token Invalid
```
Error: Unauthorized: Invalid token
```
**Solution:**
- Ensure you logged in successfully
- Token may have expired (default: 24 hours)
- Login again to get a fresh token

### Migration Failed
```
Error: Migration failed
```
**Solution:**
```bash
# Rollback migrations
php spark migrate:rollback

# Refresh all migrations
php spark migrate:refresh

# Run again
php spark migrate
```

### CORS Issues
```
Error: CORS policy blocked
```
**Solution:**
- CORS is configured in `app/Config/CORS.php`
- Add your frontend URL to `allowedOrigins`
- Frontend must be on: localhost:3000, :5173, or :8080

---

## Database Schema

### Users Table
```sql
SELECT * FROM users;
-- id, email, password, first_name, last_name, phone, role, status, is_verified
```

### Shipments Table
```sql
SELECT * FROM shipments;
-- id, customer_id, driver_id, tracking_number, pickup_address, dropoff_address, status, quote_amount
```

### Driver Profiles
```sql
SELECT * FROM driver_profiles;
-- id, user_id, vehicle_type, is_available, rating, total_deliveries, wallet_balance
```

### Wallet Transactions
```sql
SELECT * FROM wallet_transactions;
-- id, driver_id, transaction_type, amount, reference, status
```

---

## Development Commands

### Database Commands
```bash
# Show migration status
php spark migrate:status

# Rollback last migration
php spark migrate:rollback

# Refresh all migrations
php spark migrate:refresh

# Run specific seeder
php spark db:seed DemoSeeder
```

### Generate Files
```bash
# Generate new controller
php spark make:controller Api/NewController

# Generate new model
php spark make:model NewModel

# Generate migration
php spark make:migration CreateNewTable
```

### Testing
```bash
# Run tests
php spark test

# Run specific test
php spark test --filter TestClassName
```

### Environment
```bash
# Check environment
php spark environment

# Generate environment info
php spark serve --php /usr/bin/php8.1
```

---

## Production Deployment

### Before Going Live

1. **Set Production Environment**
   ```env
   CI_ENVIRONMENT = production
   app.debug = false
   ```

2. **Secure JWT Secret**
   ```bash
   # Generate strong secret
   openssl rand -base64 32
   ```

3. **Enable HTTPS**
   - Install SSL certificate
   - Update `.env`: Use `https://` in baseURL

4. **Database Backups**
   ```bash
   # Backup database
   mysqldump -u root -p biglogistics > backup_$(date +%Y%m%d).sql
   ```

5. **Cache Clearing**
   ```bash
   php spark cache:clear
   ```

6. **File Permissions**
   ```bash
   chmod -R 755 writable/
   chmod -R 755 uploads/
   ```

7. **Composer Optimization**
   ```bash
   composer install --no-dev --optimize-autoloader
   ```

---

## API Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data here
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message describing what went wrong",
  "code": 400
}
```

### Validation Error
```json
{
  "success": false,
  "errors": {
    "email": "Valid email is required",
    "password": "Password must be at least 8 characters"
  }
}
```

---

## Support

For issues or questions:
1. Check the README.md for API documentation
2. Review error messages in logs
3. Open an issue on GitHub
4. Contact development team

**Happy coding! 🚀**
