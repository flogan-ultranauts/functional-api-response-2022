const request = require('supertest')('https://jsonplaceholder.typicode.com');
const assert = require('chai').assert;

describe('Users API', () => {
  it.only(' GET all users in /users', () => {
    return request
      .get('/users')
      .expect(200)
      .then((res) => {
        console.log(JSON.stringify(res.body))
        assert.isNotEmpty(res.body);
      });
  });

  it('GET a specific user based on input condition GET /users/2', () => {
    return request
      .get('/users/1')
      .expect(200)
      .then((res) => {
        console.log(`specific user based on input ${res.body}`);
        assert.isNotEmpty(res.body);
      });
  });

  it('Does not return anything when there is no return value', () => {
    return request
      .get('/users/121')
      .expect(404)
      .then((res) => {
        console.log(` ${res.body}`);
        assert.doesNotHaveAnyKeys(res.body);
      });
  });

  it('Triggter some other API  GET /users/1 then PUT /posts/1 ', () => {
    let myUser;
    return request
      .get('/users/1')
      .expect(200)
      .then((res) => {
        console.log(`specific user based on input ${res.body}`);
        assert.hasAnyKeys(res.body, 'id');
        assert.isNotEmpty(res.body);
        myUser = res.body.company.catchPhrase;
        console.log(`catch phrase is ${myUser}`);
      })
      .then(() => {
        const postToUpdate = {
          id: 1,
          title: myUser,
          body: 'updated body',
          userId: 1,
        };
        return request
          .put('/posts/1')
          .expect(200)
          .send(postToUpdate)
          .then((res) => {
            console.log(postToUpdate);
            assert.equal(res.body.title, postToUpdate.title);
            assert.equal(res.body.body, postToUpdate.body);
            assert.equal(res.body.userId, postToUpdate.userId);
            assert.equal(res.body.id, postToUpdate.id);
          });
      });
  });

  it('Update(Modify certain resource) data of the specific user PATCH /users', () => {
    const dataToUpdate = {
      name: 'Johnson Richard',
      email: 'johnson@gmail.com',
      username: 'johnson12',
    };
    return request
      .patch('/users/10')
      .expect(200)
      .send(dataToUpdate)
      .then((res) => {
        console.log(res.body);
        assert.equal(res.body.name, dataToUpdate.name);
        assert.equal(res.body.email, dataToUpdate.email);
        assert.equal(res.body.username, dataToUpdate.username);
      });
  });

  it('Delete some resources(user) DELETE /users/1', () => {
    return request
      .delete('/users/1')
      .expect(200)
      .then((res) => {
        console.log(res.body);
        assert.isEmpty(res.body);
      });
  });
});
