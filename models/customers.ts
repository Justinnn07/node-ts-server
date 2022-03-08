const { Schema, model } = require("mongoose");

const customerSchema = Schema({
  orgName: {
    type: String,
    default: "",
  },
  orgContactName: {
    type: String,
    default: "",
  },
  orgEmail: {
    type: String,
    default: "",
  },
  orgContact: {
    type: String,
    default: "",
  },
  jobTitle: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "India",
  },
  message: {
    type: String,
    default: "",
  },
  currency: {
    type: String,
    default: "USD",
  },
  website: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },

  orgDescription: {
    type: String,
    default: "",
  },

  employees: {
    type: Number,
    default: 1000,
  },

  subscriptionType: {
    type: String,
    default: "trial",
  },
  active: {
    type: Boolean,
    default: true,
  },
  emailAccess: {
    type: Boolean,
    default: false,
  },
  clientType: {
    type: Number,
    default: 1, // 0 - Admin, 1 - Client, 2 - Partner
  },
  socialMedia: [Object], //facebook, linkedin
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

customerSchema.options.toJSON = {
  transform: function (doc: any, ret: any, options: any) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
};

const Customer = model("Customer", customerSchema);
module.exports = Customer;
