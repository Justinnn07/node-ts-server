const router = require("express").Router();
const customerController = require("../controllers/customerController");

// initials
router.get("/:id", (req: any, res: any) => {
  res.sendFile("King-Liar.mkv");
});

// customer routes
router.post("/customers", customerController.postCustomers);
router.get("/customers", customerController.getCustomers);
router.get("/customers/:id", customerController.getCustomerById);
router.patch("/customers", customerController.updateCustomers);
router.delete("/customers/:id", customerController.deleteCustomers);
module.exports = router;
