const data = {
  "type": "dare",
  "category": "emotions",
  "convo": {
    "0": {
      "texts": [
        "Hey! How'd today go? Did you post a selfie to one of your social media accounts?"
      ],
      "options": [
        {
          "text": "Nope!",
          "linkTo": 1
        },
        {
          "text": "Yep!",
          "linkTo": 2
        }
      ]
    },
    "1": {
      "texts": [
        "Oh, that’s okay. We can try that challenge another day. I know it can be difficult to fit these challenges into a busy schedule. Let’s try again tomorrow!"
      ]
    },
    "2": {
      "texts": [
        "Awesome! Let’s talk about how it went! Did you find yourself caring about how many likes and comments you got?"
      ],
      "options": [
        {
          "text": "Nope. I haven’t thought about it at all.",
          "linkTo": 3
        },
        {
          "text": "I cared a little. I was curious about who would comment and like my selfie.",
          "linkTo": 3
        },
        {
          "text": "Yeah. I checked my phone more than usual to see how people responded.",
          "linkTo": 3
        }
      ]
    },
    "3": {
      "texts": [
        "Do you think posting the selfie affected your emotions? Did you find yourself feeling excited about people responding to your selfie or disappointed about a lack of responses?"
      ],
      "options": [
        {
          "text": "Nope. I really didn’t care about it.",
          "linkTo": 4
        },
        {
          "text": "Now that I think about it, I did feel slightly excited or disappointed.",
          "linkTo": 4
        },
        {
          "text": "Yeah. I did feel excited or disappointed.",
          "linkTo": 4
        }
      ]
    },
    "4": {
      "texts": [
        "That’s totally normal.",
        "What’s important is that you become aware that social media is making you feel this way and it’s intentionally designed to do that. You are on the right track to controlling how you respond to social media.",
        "Dive deeper into: emotions!"
      ]
    }
  }
}

export default data;
