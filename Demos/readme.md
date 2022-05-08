# Demos

Two types of Demos available:

- Isolated Demos located in `/app/demos/samples/<DEMOFOLDER>` of the corresponding module
- Demos build-in to the `demo-app`

The `demo-app` consists of `app.component.html` that defines the base structure and `primary router-outlet`. Subsequent routes are loaded into the outlet.

![app.component](_images/app.component.html.png)

`/app/demos/demo-container/demo-container.html` defines a `left-menu` and a `nested router-outlet` where the individual isolated demos will be displayed.

![demo-container.component](_images/demo-container.png)

## Topics covered in the class
### Angular Introduction & Setup

- What / Why Single Page Applications
- Angular Overview and Version Comparison
- Node and its Role in the Angular ECO-System
- Angular Command Line Interface – Angular CLI
- Bootstrapping Angular
- Angular Debugging Options
- Updating Angular Projects

### TypeScript Fundamentals

- ECMA Script Standards
- TypeScript Overview, Configuration, Debugging, ES Lint
- Types, Arrays & Functions
- ECMA Script 6+ Essentials
- Objects, Classes, Interfaces
- 3rd Party Libraries & Type Definitions
- Async Operations, Promises & Observables

### Fundamentals & Completing Basic Tasks

- Components, Modules & Dependency Injection
- Expressions, Templates & Directives
- String Interpolation, Property- & Event-Binding, Two-Way Binding
- Pipes & Localization
- Custom Directives & Pipes

### Nesting Components

- Splitting the UI to Nested Components
- Databinding & Events with Nested Components
- Container vs Presentational Components
- Understanding Component Lifecycle
- Reusable Components using Local References & Content Projection
- View Child, View Children

### Routing & Modularity

- Routing Basics
- Working with Parameterized Routes
- Child- & Secondary (Auxiliary) Routes
- Preloading Component Data
- Organizing Angular Applications using Modules
- Module Lazy Loading

### Designing the User Interface

- Implementing a CSS Reset
- Global & Component Styles
- Using Sass (Synthetically Awesome Stylesheets)
- Responsive Layout using Flexbox, CSS Grid & Angular Flex Layout
- Angular Material Overview
- Using Material Component schematics
- Material Theming Colors
- Using Material Tables, Dialogs & Form Controls
- Using Angular CDK & 3rd Party Components (Charting, File Upload, Drag & Drop)

### Forms Design & Validation

- Forms Introduction
- Template Driven Forms vs Reactive (Model Based) Forms
- FormControl, FormGroups & FormArrays
- Validating Forms
- Custom- & Code-Based Validators

### Consuming RESTful Services

- Introduction Into .NET Core
- Implementing Consuming .NET Core RESTful APIs
- Using JSON Server for Prototyping
- Implementing the Client-Side Data Models

### Observables & Reactive Programming

- What is Reactive Programming / Benefits
- Observable, Observer & Subject
- Creating Observables & Casting to Observables
- Capturing Mouse & DOM Events as Observables
- Subscribing to Routes & Params, Flex Layout API
- Using Common RxJS Operators

### Managing State & Sharing Events

- What is State Management
- State Management Options
- Stateless & Stateful Services
- Sharing Data between deeply Nested Components
- Service Bus & Sharing Events between deeply Nested Components
- Overview of the Redux Pattern with NgRx HelloWorld

### Testing Basics

- Unit Tests vs Integration Tests
- Karma & Jasmine Basics
- Test Setup & Mocking
- Testing Angular Components, Services and Forms
- In Short: End to End Testing

### Securing & Publishing Angular

- Authentication / Authorization Basics in SPAs
- Token based Auth: Understanding Jwt, OAuth 2.0 & OpenID Connect
- Securing Angular Routes using Route Guards
- Using Interceptors to Automate Tokens
- Preparing & Creating a Production Build
- Hosting Option Overview (Docker, Firebase, Azure CDN, …)
- Mastering Url Rewrite
