module.exports = {
  routes: [
    {
      method: "POST",
      handler: "api::email-form.email-form.sendForm",
      path: "/sendForm",
    },
  ],
};
