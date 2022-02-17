# Farkel is a classic dice rolling, risk taking game.

I chose to build a Farkel App because I didn't want to just do the same project that every developer does when learning how to code. I hadn't seen a Farkel App, so I thought it would be a great way to test out what I have learned about JavaScript and React––and ofcourse HTML and CSS/SASS.

## State Management & Context:

I chose from the outset to use functional components with the useState hook, rather than class components. In the majority of cases, the state was localized to the component itself, or passed down one level. But there are a few place where state would be required throughout the app. I chose to solve this with the useContext hook. This allowed me to set the context at the highest level and keep track of the player information, an active game, and game over. This solution kept everything simple and easy to follow.

## The Turn Component:

The most challenging part of this app was the turn component, and the scoring. I walked through the logic of the game and built out the functionality piece by piece. Rolling the dice, checking for Farkel, selecting dice for scoring, updating the roll array, allowing the choice to roll again, or finish turn. There are a lot of different scenarios to handle and I tried to deal with them as simply as possible. After I built the basic functionality and scoring, I added some of the more nuaced rules to the game (i.e. having to initially reach 500 points before you can start scoring). I used state values and conditional logic in my JSX to toggle between the different display settings and show/hide buttons.

## Scoring:

The scoring posed a significant challenge. I moved the scoring out of the turn component to a helper scoring document. Scoring required sorting the dice. I created the scoring method so that the entire roll could be passed through it to see if any score was possible, which would indicate if the roll was a Farkel. I also configured the scoring method so that the highest possible score would be calculated for the selected dice.

## Styling

I used SASS to style my app. I chose a simple design that would look great on both mobile and large screens. I imported the MUI
React library to help with the instructions, scoring, and scorecard popovers. I used React-Media to handle some of the screen size adjustments.
