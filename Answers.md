1. What problem does the context API help solve?

    Prop drilling

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions it’s payloads of information that send data from application to the store (it’s only source of information for the store)
    Reducers specify how the application’s state changes in response to actions sent to the store.
    Store is the object that brings together Actions and reducer. 
    single source of truth means that basic, main object doesn’t change and stays as it was. It’s stays untouched.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global. In Redux we use “store” to hold application state. We usually use this in the highest component where Application is rendered.
    Component state is local and can be updated in that component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Thunk is a function that returned from another function. The dependency "redux-thunk" allows us to make API calls from our action crators. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    I really can't answer on this question. I like Context API because right now at the beginning it seems to be effective and easy at the same time. But also I maybe will like Redux in the future, because even now it seems to be very powerful - I just need more time and practice to dive in deeper in this topic. 



