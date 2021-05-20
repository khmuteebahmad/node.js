const expect = require('chai').expect;
const request = require('superagent');
const status = {OK:200,BAD_REQUEST:400};
const endpointURL =
 'http://localhost:3000/api/v1/products/';
describe('Products API',function(){
 /* Details of below data unnecessary to answer question */
 const validId = /* ID of product already in database */;
 const invalidId = /* Invalid product ID */;
 const validProduct = {/* Valid product object*/};
 it('valid GET requests',function(done){
request.get(apiRoot + validId).end(function(err,res){
expect(res.statusCode).to.equal(status.OK);
expect(res.body).to.have.property('price');
expect(res.body).to.have.property('quantity');
done();
});
 });
 it('invalid GET requests',function(done){
request.get(apiRoot + invalidId).end(function(err,res){
expect(res.statusCode).to.equal(status.BAD_REQUEST);
done();
});
 });
 it('valid PUT requests',function(done){
request.put(endpointURL + validId).send(validProduct)
.end(function(err,res){
expect(res.statusCode).to.equal(status.OK);
expect(res.body).to.deep.equal(validProduct);
request.get(apiRoot + validID).end(function(err,res){
expect(res.body.price).to.equal(validProduct.price);
expect(res.body.quantity)
 .to.equal(validProduct.quantity);
done();
});
});
 });
});