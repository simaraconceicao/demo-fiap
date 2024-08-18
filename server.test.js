const request = require('supertest');
const app = require('./server');

describe('POST /sum', () => {
  
  it('should return the sum of two numbers', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ num1: 5, num2: 10 });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('sum', 15);
  });

  it('should return 400 if one of the numbers is missing', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ num1: 5 });
    
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Invalid input. Please provide two numbers.');
  });

  it('should return 400 if one of the inputs is not a number', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ num1: 'abc', num2: 10 });
    
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Invalid input. Please provide two numbers.');
  });

  it('should return 400 if both numbers are missing', async () => {
    const res = await request(app)
      .post('/sum')
      .send({});
    
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Invalid input. Please provide two numbers.');
  });

  it('should return the sum if numbers are provided as strings', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ num1: '5', num2: '10' });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('sum', 15);
  });

  it('should return the sum of negative numbers', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ num1: -5, num2: -10 });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('sum', -15);
  });

  it('should return the sum of floating-point numbers', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ num1: 5.5, num2: 10.3 });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('sum', 15.8);
  });

});

describe('POST /subtract', () => {

  it('should return the difference between two numbers', async () => {
    const res = await request(app)
      .post('/subtract')
      .send({ num1: 15, num2: 5 });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('difference', 10);
  });

  it('should return 400 if one of the numbers is missing', async () => {
    const res = await request(app)
      .post('/subtract')
      .send({ num1: 10 });
    
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Invalid input. Please provide two numbers.');
  });

  it('should return 400 if one of the inputs is not a number', async () => {
    const res = await request(app)
      .post('/subtract')
      .send({ num1: 'abc', num2: 10 });
    
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Invalid input. Please provide two numbers.');
  });

  it('should return 400 if both numbers are missing', async () => {
    const res = await request(app)
      .post('/subtract')
      .send({});
    
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Invalid input. Please provide two numbers.');
  });

  it('should return the difference if numbers are provided as strings', async () => {
    const res = await request(app)
      .post('/subtract')
      .send({ num1: '15', num2: '5' });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('difference', 10);
  });

  it('should return the difference of negative numbers', async () => {
    const res = await request(app)
      .post('/subtract')
      .send({ num1: -5, num2: -10 });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('difference', 5);
  });

  it('should return the difference with floating-point numbers', async () => {
    const res = await request(app)
      .post('/subtract')
      .send({ num1: 10.5, num2: 4.3 });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('difference', 6.2);
  });

});
