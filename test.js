// const request = require("supertest");
// const app = require('./server')



// describe('Register Route', () => {
//     it('should register a new user with valid data', async () => {
//       const userData = {
//         username: 'john_doe',
//         email: 'test@example.com',
//         password: 'password',
//         balance: 1000
//       };
  
//       const response = await request(app)
//         .post('/v1/register')
//         .send(userData);
  
//       expect(response.statusCode).toBe(200);
//       expect(response.body).toHaveProperty('message', 'User registered successfully');
      
//     });
  
//     it('should return 400 for registration with invalid data', async () => {
//       const userData = {
//         username: '', 
//         email: 'test@example.com',
//         password: 'password',
//         balance: 0
//       };
  
//       const response = await request(app)
//         .post('/v1/register')
//         .send(userData);
  
//       expect(response.statusCode).toBe(400);
//     });
  
//     it('should return 400 for registration with existing email', async () => {
//       const userData = {
//         username: 'john_doe',
//         email: 'test@example.com', 
//         password: 'password',
//         balance: 0
//       };
  
//       const response = await request(app)
//         .post('/v1/register')
//         .send(userData);
  
//       expect(response.statusCode).toBe(400);
//     });
//   });
  

// describe('Login Route', () => {
//     it('should login a user with valid credentials', async () => {
//       const loginData = {
//         email: 'test@example.com',
//         password: 'password'
//       };
  
//       const response = await request(app)
//         .post('/v1/login')
//         .send(loginData);
  
//       expect(response.statusCode).toBe(200);
//       expect(response.body).toHaveProperty('token');
//     });
  
//     it('should return 400 for login with invalid credentials', async () => {
//       const loginData = {
//         email: 'test@example.com',
//         password: 'wrongpassword'
//       };
  
//       const response = await request(app)
//         .post('/v1/login')
//         .send(loginData);
  
//       expect(response.statusCode).toBe(400);
//     });
//   });


//   describe('Transfer Route', () => {
//     it('should transfer funds between accounts', async () => {
//       const transferData = {
//         fromUserId: 'userId1', 
//         toUserId: 'userId2',
//         amount: 100
//       };
  
//       const response = await request(app)
//         .post('/v1/transfer')
//         .send(transferData);
  
//       expect(response.statusCode).toBe(200);
    
//     });
  
//     it('should return 400 for transfer with invalid data', async () => {
//       const transferData = {
//         fromUserId: 'invalidUserId', 
//         toUserId: 'userId2',
//         amount: -100 
//       };
  
//       const response = await request(app)
//         .post('/v1/transfer')
//         .send(transferData);
  
//       expect(response.statusCode).toBe(400);
//     });
//   });
  
//   describe('View Transaction Route', () => {
//     it('should fetch transaction history for a user', async () => {
//       const userId = 'userId1';
  
//       const response = await request(app)
//         .get(`/v1/transactions/${userId}`);
  
//       expect(response.statusCode).toBe(200);
//       expect(response.body).toHaveProperty('user');
//       expect(response.body).toHaveProperty('transactions');
//     });
  
//     it('should return 404 for invalid user ID', async () => {
//       const invalidUserId = 'invalidUserId'; 
  
//       const response = await request(app)
//         .get(`/v1/transactions/${invalidUserId}`);
  
//       expect(response.statusCode).toBe(404);
//     });
//   });