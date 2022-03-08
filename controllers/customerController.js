const Customer = require("../models/customers");
const fs = require("fs");
exports.getCustomers = async (req, res) => {
  const newCustomer = await Customer.find();
  try {
    res.status(200).send(newCustomer);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.postCustomers = async (req, res) => {
  const newCustomer = await new Customer(req.body);

  try {
    fs.writeFile("data.json", req.body, (err) => {
      if (err) throw err;
    });

    newCustomer.save((err) => {
      if (err) {
        res.send(err.message);
      } else {
        res.status(200).send({ success: true });
      }
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.deleteCustomers = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.send({ success: false });
    }
    res.send(customer);
  } catch (error) {
    res.send(error);
  }
};

exports.updateCustomers = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.body.id);
    const updatedCustomer = await customer.updateOne(req.body);
    if (!updatedCustomer) {
      res.send({ success: false });
    } else {
      res.send({ success: true });
    }
  } catch (error) {
    res.send(error.message);
  }
};

exports.getCustomerById = async (req, res) => {
  await Customer.findById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(() => res.status(404).send({ message: "Customer not found!" }));
};
