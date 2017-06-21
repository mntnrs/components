const fs = require("fs");

/**
 * Ensures package names are namespaced into @ocode
 */
function normalizePackageName(str) {
  if (str.startsWith("@ocode")) {
    return str;
  } else {
    return `@ocode/${str}`;
  }
}

module.exports = function(plop) {
  // create your generators here
  plop.setGenerator("new-component", {
    description: "scaffold a new preact component with @ocode constants",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the naem of this component?",
        validate: function(value) {
          const desiredPackageName = value;
          if (/.+/.test(desiredPackageName)) {
            const packages = fs.readdirSync("./packages");
            if (packages.includes(desiredPackageName)) {
              return "name conflicts with existing package";
            }
            return true;
          }
          return "name is required";
        }
      },
      {
        type: "input",
        name: "description",
        message: "What does this component do?",
        validate: function(value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "description is required";
        }
      }
    ],
    actions: [
      {
        type: "add",
        path: "packages/{{dashCase name}}/package.json",
        templateFile: "templates/package.json.tpl"
      },
      {
        type: "add",
        path: "packages/{{dashCase name}}/src/index.js",
        templateFile: "templates/index.js.tpl"
      },
      {
        type: "add",
        path: "packages/{{dashCase name}}/stories.js",
        templateFile: "templates/stories.tpl"
      }
    ]
  });
};
