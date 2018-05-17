const prod = process.env.NODE_ENV === 'production'

module.exports = function () {
  	process.env.BACKEND_URL = (prod ? 'http://ec2-18-191-86-176.us-east-2.compute.amazonaws.com:1337' : 'http://localhost:1337')

	return {}
}