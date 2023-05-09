import React, { useState } from "react";
import Navbar from "../common/Navbar";
import MenuCard from "../common/MenuCard";
import Footer from "./Footer";

const Blogs = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="container mx-auto">
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <MenuCard showMenu={showMenu} setShowMenu={setShowMenu} />}
      <div className="my-7 mx-4 lg:mx-10 space-y-4">
        <h1 className="text-2xl text-center font-bold">Blogs</h1>
        <div className="grid md:grid-col-2 lg:grid-cols-3 gap-6 justify-center">
          <div className="border border-solid border-gray-300 p-4 space-y-3 rounded-xl">
            <h3 className="text-xl">
              1. Difference between uncontrolled and controlled components
            </h3>
            <div className="space-y-3 text-gray-500">
              <p>
                Uncontrolled components in web development are form elements
                where the state is handled by the DOM rather than controlled by
                the framework. These components do not keep track of the input's
                value or manage its changes. Instead, the value is obtained
                through the DOM when needed. Uncontrolled components are easier
                to implement but offer less control and validation over user
                input.
              </p>
              <p>
                On the other hand, controlled components are form elements whose
                value is controlled by the framework. The component's state is
                updated whenever the user interacts with the form element, and
                the component explicitly sets the value and manages the changes.
                Controlled components provide more control and enable tighter
                integration with the application's logic, allowing for
                validation, formatting, and performing actions based on the user
                input. However, they require more code to handle the state
                management compared to uncontrolled components.
              </p>
            </div>
          </div>
          <div className="border border-solid border-gray-300 p-4 space-y-3 rounded-xl">
            <h3 className="text-xl">
              2. How to validate React props using PropTypes ?
            </h3>
            <div className="space-y-3 text-gray-500">
              <p>
                To validate React props using PropTypes, we can make use of the
                PropTypes library, which comes bundled with React. First, you
                need to import the PropTypes module from the 'prop-types'
                package. Then, we can define the expected types for each prop in
                the component's propTypes object.
              </p>
              <p>
                PropTypes provides a range of validators for different types
                such as string, number, array, object, etc. You can also specify
                additional requirements like prop types that must be present or
                that must satisfy certain conditions. This helps ensure that the
                props passed to your component conform to the expected types,
                helping to catch bugs and improve code reliability.
              </p>
            </div>
          </div>
          <div className="border border-solid border-gray-300 p-4 space-y-3 rounded-xl">
            <h3 className="text-xl">
              3. Difference between nodejs and express js. ?
            </h3>
            <div className="space-y-3 text-gray-500">
              <p>
                Node.js and Express.js are both popular frameworks used in
                JavaScript web development, but they serve different purposes.
                Node.js is a runtime environment that allows developers to run
                JavaScript on the server-side. It provides an event-driven,
                non-blocking I/O model that makes it highly efficient for
                building scalable and real-time applications. Node.js allows
                developers to write server-side code using JavaScript, enabling
                full-stack JavaScript development. It provides a rich set of
                built-in modules and a vast ecosystem of third-party packages,
                making it flexible and versatile for various types of
                applications.
              </p>
              <p>
                Express.js, on the other hand, is a web application framework
                built on top of Node.js. It provides a minimalistic and
                unopinionated approach to building web applications and APIs.
                Express.js simplifies the process of handling HTTP requests and
                routing, allowing developers to define routes, middleware, and
                handle request and response objects easily. It provides a set of
                features such as routing, middleware support, template engine
                integration, and more. Express.js is lightweight, flexible, and
                widely used for creating server-side applications and APIs in
                Node.js.
              </p>
            </div>
          </div>
          <div className="border border-solid border-gray-300 p-4 space-y-3 rounded-xl">
            <h3 className="text-xl">
              4. What is a custom hook, and why will you create a custom hook?
            </h3>
            <div className="space-y-3 text-gray-500">
              <p>
                A custom hook is a JavaScript function in React that allows you
                to reuse logic across multiple components. It enables you to
                extract and encapsulate reusable stateful or side-effect-related
                code so that it can be easily shared and used by different
                components. Custom hooks follow a specific naming convention,
                starting with the word "use," to leverage the benefits of
                React's built-in rules and ensure proper usage.
              </p>
              <p>
                You would create a custom hook to abstract away complex or
                repetitive logic that is used in multiple components. It
                promotes code reusability, modularity, and separation of
                concerns, making your codebase more maintainable and scalable.
                Custom hooks can encapsulate state management, API calls, event
                listeners, animations, or any other logic that you find yourself
                using in multiple places. By creating custom hooks, you can
                avoid code duplication, enhance code organization, and make your
                components more focused on rendering and presentation logic,
                leading to cleaner and more maintainable code.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
