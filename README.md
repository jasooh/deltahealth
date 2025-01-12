# DeltaHealth

Welcome to the repo for our DeltaHacks XI submission - **DeltaHealth**!

## Inspiration
One day our group member, Mohammed, looked at us and said, "I'm disabled. Let's make an app." 🤪

## What it does
DeltaHealth is designed to listen to your symptoms and utilize supervised machine learning to classify illnesses based on the symptoms you provide. It then assesses the severity of your condition and offers guidance on next steps. 

This solution is aimed at the vast majority of individuals who may not have immediate access to a doctor, providing instant insights to determine whether a seemingly obscure set of symptoms could indicate a serious or life-threatening condition. 🚑

## How we built it
DeltaHealth was developed with Next.js for both the frontend and backend. On the backend, we integrated a tuned **Cohere's Command-R model** to process and condition user input to be fed into our model. 🤖

For the supervised machine learning component, we implemented three algorithms using the sklearn library: the Random Forest Classifier, the Naïve Bayes Classifier, and the Support Vector Classifier. These algorithms were used to accurately classify diseases. Additionally, the Cohere LLM was employed to generate concise and relevant reports, presenting critical insights to the users. 🤓

## Challenges we ran into
The main challenge we ran into was developing a model that could accurately predict the correct illness based on the symptoms. Often times we would overfit the data or it would not learn at all due to the nature of the training data we found online. This required hours of searching and training, but we eventually found a set that worked! 🦾

Building an AI powered app and connecting both the frontend and backend components is not that easy, as it was our first time building a Full Stack AI app. But with great documentaion and Vercel AI SDK, connecting our next.js app with Cohere was much smoother.

## Accomplishments that we're proud of
We are mostly proud of the models we were able to train to detect the illnesses, especially after all those long hours of testing and training.

## What we learned
How to prompt engineer AI Agents according to our input/output needs. Learning how to make supervised classification models taught us a lot more about NLPs and we can't wait to keep on learning more about how these models are applied to the real world!

## What's next for DeltaHealth
DeltaHealth is grateful all the emergency personnnel that is ready for any kind of emergency situation and we want to further help by giving the information to the emergency services directly through our app, so that more time can be saved under serious conditions.

DeltaHealth envisions a future where it becomes a support for individuals with chronic illnesses—those who often face limited resources and a lack of community support. By connecting individuals with similar circumstances, we aim to foster a supportive community that empowers them to navigate their journeys with confidence and hope. DeltaHealth aims to create a world where no one has to face their challenges alone. 💙
