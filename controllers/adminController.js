const Admin = require("../models/adminSchema");
const bcrypt = require("bcrypt");

exports.dashboard = (req, res) => {
  res.render("index");
};

exports.loginPage = (req, res) => {
  res.render("login");
};

exports.loginAdmin = async (req, res) => {

  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.send("User not found");
    }

    const match = await bcrypt.compare(password, admin.password);

    if (!match) {
      return res.send("Wrong Password");
    }

    res.cookie("adminId", admin._id);

    res.redirect("/admin");

  } catch (err) {

    console.log(err);
    res.send("Login Error");
  }
};

exports.registerPage = (req, res) => {
  res.render("register");
};

exports.registerAdmin = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingUser = await Admin.findOne({ email });

    if (existingUser) {
      return res.send("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({
      name,
      email,
      password: hashedPassword,
      role: "Admin",
      phone: "",
      avatar: ""
    });

    res.redirect("/admin/login");

  } catch (err) {

    console.log(err);
    res.send(err);
  }
};

exports.logout = (req, res) => {

  res.clearCookie("adminId");

  res.redirect("/admin/login");
};

exports.addPage = (req, res) => {
  res.render("addAdmin");
};

exports.addAdmin = async (req, res) => {

  try {

    if (!req.file) {
      return res.send("Avatar required");
    }

    const data = req.body;

    const hashedPassword = await bcrypt.hash(
      data.password,
      10
    );

    data.password = hashedPassword;

    data.avatar = req.file.filename;

    await Admin.create(data);

    res.redirect("/admin/view");

  } catch (err) {

    console.log(err);
    res.send("Error");
  }
};

exports.viewAdmins = async (req, res) => {

  const admins = await Admin.find();

  res.render("viewAdmin", { admins });
};

exports.deleteAdmin = async (req, res) => {

  await Admin.findByIdAndDelete(req.params.id);

  res.redirect("/admin/view");
};

exports.editPage = async (req, res) => {

  const admin = await Admin.findById(req.params.id);

  res.render("editAdmin", { admin });
};

exports.updateAdmin = async (req, res) => {

  const data = req.body;

  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  if (req.file) {
    data.avatar = req.file.filename;
  }

  await Admin.findByIdAndUpdate(
    req.params.id,
    data
  );

  res.redirect("/admin/view");
};