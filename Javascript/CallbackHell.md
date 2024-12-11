# 🌀 Callback Hell: An e-Commerce Example

## 🛒 Scenario: Placing an Order
Assume a scenario of e-Commerce web, where one user is placing order, he has added items like, shoes, pants and kurta
in cart and now he is placing order. So in backend the situation could look something like this

### Example Cart:
```javascript
const cart = ["shoes", "pants", "kurta"];

// Two steps to place a order
// 1. Create a Order
// 2. Proceed to Payment
// It could look something like this:


api.createOrder();
api.proceedToPayment();


```

Assumption, once order is created then only we can proceed to payment, so there is a dependency. So How to manage
this dependency. Callback can come as rescue, How?

```javascript
const cart = ["shoes", "pants", "kurta"];
let order;

api.createOrder(function (order) {
  order = order;
  api.proceedToPayment();
});
```


To make it a bit complicated, what if after payment is done, you have to show Order summary by calling
api.showOrderSummary() and now it has dependency on api.proceedToPayment() Now my code should look
something like this:


```javascript
api.createOrder(cart, function () {
 api.proceedToPayment(function () {
 api.showOrderSummary();
 });
});
```


Now what if we have to update the wallet, now this will have a dependency over showOrderSummary

```javascript
api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet();
        });
     });
});
// 💡 Callback Hell
```


### 🚨 Callback Hell in Large Codebases
When working with a large codebase that involves multiple APIs with dependencies on each other, we encounter **Callback Hell**. These deeply nested structures are:  
- **Difficult to maintain:** Changes in one layer can break the entire flow.  
- **Hard to debug:** Tracking issues across multiple nested callbacks is cumbersome.  

This nested callback structure is often referred to as the **Pyramid of Doom** due to its shape and complexity.

---

### 🔄 Moving to Inversion of Control
Up to this point, we have understood the challenges of Callback Hell. But there’s another concept to be aware of: **Inversion of Control**.  

---

### 💡 Understanding Inversion of Control
When using callbacks, **control of execution** is handed over to the parent function. This means:  
- You **lose control** of your code flow.  
- The execution of your callback is now entirely dependent on the parent function.  

#### Risks of Inversion of Control:
1. The parent function may behave unpredictably.  
2. The callback may:
   - Run multiple times.  
   - Never execute.  
   - Execute at the wrong time.  
3. The parent function could be written by another developer, introducing potential compatibility or reliability issues.

---

### 🌟 Key Insight:
Inversion of Control makes it harder to predict and debug your code. To avoid this, consider modern solutions like **Promises** or **Async/Await**, which provide more control over asynchronous workflows.



## 🗝️ Key Takeaways:

💡 **Blind Trust in Parent Functions:**  
In this example, we are creating an order and blindly trusting `createOrder` to call `proceedToPayment`.  

💡 **Risk of Dependency:**  
`proceedToPayment` is a critical part of the process, yet we rely entirely on `createOrder` to handle and execute it.  

💡 **Inversion of Control:**  
When we pass a function as a callback, we are dependent on the parent function to execute it correctly. This is called **Inversion of Control**. The risks include:  
- The parent function might stop working.  
- The parent function might be written by another programmer and behave unpredictably.  
- The callback might run multiple times or not at all.  

### 💡 Conclusion:
While callbacks are useful, they come with risks. To mitigate these risks, consider using **Promises** or **Async/Await** for better control and code reliability.
