import{j as c}from"./jsx-runtime.7faW4zRM.js";import{r as Z}from"./index.DhYZZe0J.js";const ce=[{group:"blog",slug:"blog/5-key-challenges-in-todays-era-of-big-data",frontmatter:{title:"5 Key Challenges In Today’s Era of Big Data",date:"2020-07-20T12:38:00.000Z",tags:["Guest Post","Big Data"],image:"/images/makeen-guestpost-cover.webp",author:"Tamjid Aijazi"},content:`
<div class="guest-post">
  This <a href="https://www.makeen.io/5-key-challenges-in-todays-era-of-big-data/"> article </a>
  is a a guest post by <a href="https://www.makeen.io/author/tamjid-aijazi/">Tamjid Aijazi</a> from <a href="https://www.makeen.io/">Makeen Technologies</a>
</div>

Digital transformation will create trillions of dollars of value. While estimates vary, the World Economic Forum in 2016 estimated an increase in $100 trillion in global business and social value by 2030. Due to AI, [PwC](https://www.pwc.com/) has estimated an increase of $15.7 trillion and [McKinsey](https://www.mckinsey.com/) has estimated an increase of $13 trillion in annual global GDP by 2030.

We are currently in the middle of an AI renaissance, driven by big data and breakthroughs in machine learning and deep learning. These breakthroughs offer opportunities and challenges to companies depending on the speed at which they adapt to these changes.

## Modern enterprises face 5 key challenges in today’s era of big data

### Handling a multiplicity of enterprise source systems

The average [Fortune 500](https://fortune.com/fortune500/) enterprise has a few hundred enterprise IT systems, all with their different data formats, mismatched references across data sources, and duplication

### Incorporating and contextualising high frequency data

The challenge gets significantly harder with increase in sensoring, resulting inflows of real time data. For example, readings of the gas exhaust temperature for an offshore low-pressure compressor are only of limited value in of itself. But combined with ambient temperature, wind speed, compressor pump speed, history of previous maintenance actions, and maintenance logs, this real-time data can create a valuable alarm system for offshore rig operators.

### Working with data lakes

Today, storing large amounts of disparate data by putting it all in one infrastructure location does not reduce data complexity any more than letting data sit in siloed enterprise systems.

### Ensuring data consistency, referential integrity, and continuous downstream use

A fourth big data challenge is representing all existing data as a unified image, keeping this image updated in real-time and updating all downstream analytics that use these data. Data arrival rates vary by system, data formats from source systems change, and data arrive out of order due to networking delays.

### Enabling new tools and skills for new needs

Enterprise IT and analytics teams need to provide tools that enable employees with different levels of data science proficiency to work with large data sets and perform predictive analytics using a unified data image.

## Let’s look at what’s involved in developing and deploying AI applications at scale

### Data assembly and preparation

The first step is to identify the required and relevant data sets and assemble them. There are often issues with data duplication, gaps in data, unavailable data and data out of sequence.

### Feature engineering

This involves going through the data and crafting individual signals that the data scientists and domain experts think will be relevant to the problem being solved. In the case of AI-based predictive maintenance, signals could include the count of specific fault alarms over the trailing 7 days, 14 days and 21 days, the sum of the specific alarms over the same trailing periods; and the maximum value of certain sensor signals over those trailing periods.

### Labelling the outcomes

This step involves labeling the outcomes the model tries to predict. For example, in AI-based predictive maintenance applications, source data sets rarely identify actual failure labels, and practitioners have to infer failure points based on a combination of factors such as fault codes and technician work orders.

### Setting up the training data

For classification tasks, data scientists need to ensure that labels are appropriately balanced with positive and negative examples to provide the classifier algorithm enough balanced data. Data scientists also need to ensure the classifier is not biased with artificial patterns in the data.

### Choosing and training the algorithm

Numerous algorithm libraries are available to data scientists today, created by companies, universities, research organizations, government agencies and individual contributors.

### Deploying the algorithm into production

Machine learning algorithms, once deployed, need to receive new data, generate outputs, and have some actions or decisions be made based on those outputs. This may mean embedding the algorithm within an enterprise application used by humans to make decisions – for example, a predictive maintenance application that identifies and prioritizes equipment requiring maintenance to provide guidance for maintenance crews. This is where the real value is created – by reducing equipment downtime and servicing costs through more accurate failure prediction that enables proactive maintenance before the equipment actually fails. In order for the machine learning algorithms to operate in production, the underlying compute infrastructure needs to be set up and managed.

### Close-loop continuous improvement

Algorithms typically require frequent retraining by data science teams. As market conditions change, business objects and processes evolve, and new data sources are identified. Organizations need to rapidly develop, retrain, and deploy new models as circumstances change.

---

Problems that have to be addressed to solve AI computing problems are nontrivial. Massively parallel elastic computing and storage capacity are prerequisites. In addition to the cloud, there is a multiplicity of data services necessary to develop, provision, and operate applications of this nature. However, the price of missing a transformational strategic shift is steep. The corporate graveyard is littered with once-great companies that failed to change.

<div class="guest-post">
  This <a href="https://www.makeen.io/5-key-challenges-in-todays-era-of-big-data/"> article </a>
  is a a guest post by <a href="https://www.makeen.io/author/tamjid-aijazi/">Tamjid Aijazi</a> from <a href="https://www.makeen.io/">Makeen Technologies</a>
</div>
`},{group:"blog",slug:"blog/7-days-of-js-factorial-and-average",frontmatter:{title:"7 Days of JS: Factorial and Average",date:"2019-11-29T22:32:00.000Z",tags:["JavaScript","Challenge"],image:"/images/7daysJS.webp",author:"Lautaro Lobo"},content:`
Welcome to day 1 of 7 Days of JavaScript! A 7 days challenge to crack your head up into some simple but complex algorithms. Today we'll work on writing two math functions, factorial and average.

To test and run JavaScript, you need the JSC compiler.

Just kidding! A compiler?! You can run it in your own browser!

But, I've found this website: <a href="https://playcode.io/" target="_blank">Playcode.io</a>. It has all I want, a minimalistic dark theme and a clean console. You can run the code wherever you want, but I encourage you to use Playcode, everything is just nicer.

Enough introduction, let's dive right in!

## Factorial

So the factorial function takes a Natural number \`n\`, and returns the product between all the Naturales numbers that are between 1 and \`n\`, like this:

\`\`\`java
5
//1*2*3*4*5
120
\`\`\`

## Average

The average function is a well known one. It takes an array of numbers, sums them and divides that sum by the length of the initial array. Here's an example:

\`\`\`java
[1,5,8,4]
//(1+5+8+4)/4
4.5
\`\`\`

Now it's your turn. Give them a try, especially if you are kinda newbie on JavaScript because you'll build a good understanding of how loops work.

Did you solve them already? Try a different approach! Making more than one solution will strengthen your knowledge, giving you some flexibility when facing problems. And that's key when programming.

<a href="https://lautarolobo.xyz/blog/solution-to-day-1-of-7-days-of-js" title="Solution to Day 1 of 7 Days of JS"> Here </a> are the solutions.

See ya!

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/7-days-of-js-factorial-and-average",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/7-days-of-js-factorial-and-average",
 "headline": "7 Days of JS: Factorial and Average",
 "alternativeHeadline": "7 Days of JavaScript Challenge: Day 1",
 "genre": "JavaScript", 
 "keywords": [
  "challenge", 
  "javascript", 
  "computer science", 
  "programming" 
],  
 "wordcount": "204",
 "datePublished": "2019-11-29",
 "dateCreated": "2019-11-29",
 "dateModified": "2024-06-25",
 "description": "A 7 days challenge to make you a better JavaScript programmer",
 "isFamilyFriendly": "true",
 "image": "https://lautarolobo.xyz/images/7daysJS-7f7d8328.webp",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/7-days-of-js-myelement-plus-n",frontmatter:{title:"7 Days of JS: myElement + n",date:"2019-12-04T12:25:00.000Z",tags:["JavaScript","Challenge"],image:"/images/7daysJS.webp",author:"Lautaro Lobo"},content:`
Welcome to day 6 of 7 Days of JavaScript!

Let's see, I got a nice one for today.

Given an array and a number \`n\`, return the array with each element summed to \`n\`.

Here's an example:

\`\`\`javascript
sumToArray(5,[1,2,3,4])
...
[6,7,8,9]
\`\`\`

If you want, you can also return the output as a string- If that makes it easier for you, it's OK.

You can check out the solution algorithm <a href="https://lautarolobo.xyz/blog/solution-to-day-6-of-7-days-of-js/" title="#7DaysJs - myElement + n">here</a>.

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/7-days-of-js-myelement-plus-n/",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/7-days-of-js-myelement-plus-n/",
 "headline": "7 Days of JS: myElement + n",
 "alternativeHeadline": "Day 6 of 7 Days of JS",
 "genre": "JavaScript", 
 "keywords": [
  "javascript", 
  "challenge", 
  "programming"
],  
 "wordcount": "66",
 "datePublished": "2019-12-04",
 "dateCreated": "2019-12-04",
 "dateModified": "2024-06-25",
 "description": "6th Day of 7 Days of JS",
 "isFamilyFriendly": "true",
 "image": "https://lautarolobo.xyz/images/7daysJS-7f7d8328.webp",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/7-days-of-js-primes-until-n",frontmatter:{title:"7 Days of JS: Primes Until n",date:"2019-12-05T11:16:00.000Z",tags:["JavaScript","Challenge"],image:"/images/7daysJS.webp",author:"Lautaro Lobo"},content:`
Welcome to day 7 of 7 Days of JavaScript!

Today, on the last day of this challenge, we will tackle a hard one.

Write a function that takes a Natural number \`n\`, which returns all the primes from 0 to \`n\` and a string at the end with some phrase.

Example:

\`\`\`javascript
primesUntil(7)
...
2
3
5
'Why the string?'
\`\`\`

Hint: you may want to use a helper function.

Give it time. If you feel frustrated, go take a walk and then sit down to try it again.

And then, read the solution <a href="https://lautarolobo.xyz/blog/solution-to-day-7-of-7-days-of-js/" title="Solution to the last day of 7 Days of JS">here</a>.

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/7-days-of-js-primes-until-n/",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/7-days-of-js-primes-until-n/",
 "headline": "7 Days of JS: Primes Until n",
 "alternativeHeadline": "Day 7 of 7 Days of JS",
 "genre": "JavaScript", 
 "keywords": [
  "javascript", 
  "challenge", 
  "programming"
],  
 "wordcount": "86",
 "datePublished": "2019-12-05",
 "dateCreated": "2019-12-05",
 "dateModified": "2024-06-25",
 "description": "Last Day of 7 Days of JS",
 "isFamilyFriendly": "true",
 "image": "https://lautarolobo.xyz/images/7daysJS-7f7d8328.webp",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/7-days-of-js-read-my-sign",frontmatter:{title:"7 Days of JS: Read My Sign",date:"2019-12-01T21:22:00.000Z",tags:["JavaScript","Challenge"],image:"/images/7daysJS.webp",author:"Lautaro Lobo"},content:`
Welcome to day 3 of 7 of Days of JavaScript!

Today's challenge is to write a function that takes an array, and says how many numbers are positives, how many numbers are negatives, and how many are zeros.

Example:

\`\`\`java
[1,3,0,-1,0,5,-5]
...
\\{
zeros: 2,
positives: 3,
negatives: 2
}
\`\`\`

Good luck!

You can see the solution <a href="https://lautarolobo.xyz/blog/solution-to-day-3-of-7-days-of-js/" title="#7DaysJs - Read My Sign">here</a>.

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/7-days-of-js-read-my-sign/",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/7-days-of-js-read-my-sign/",
 "headline": "7 Days of JS: Read My Sign",
 "alternativeHeadline": "Day 3 of 7 Days of JS",
 "genre": "JavaScript", 
 "keywords": [
  "javascript", 
  "challenge", 
  "programming"
],  
 "wordcount": "47",
 "datePublished": "2019-12-01",
 "dateCreated": "2019-12-01",
 "dateModified": "2024-06-25",
 "description": "3th Day of 7 Days of JS",
 "isFamilyFriendly": "true",
 "image": "https://lautarolobo.xyz/images/7daysJS-7f7d8328.webp",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/7-days-of-js-reverse-a-string",frontmatter:{title:"7 Days of JS: Reverse a String",date:"2019-12-02T17:43:00.000Z",tags:["JavaScript","Challenge"],image:"/images/7daysJS.webp",author:"Lautaro Lobo"},content:`
Welcome to day 4 of 7 Days of JavaScript!

Today we will see how to reverse a string. It's probably the most asked question ever on technical interviews.

So the statement is quite simple, although the problem has an unexpected complexity when you face it for the first time: write a function that takes a string and returns the string reversed.

Here's an example:

\`\`\`javascript
reverseString('Japan')
...
'napaJ'
\`\`\`

Give it a try.

You can see the solutions I made <a href="https://lautarolobo.xyz/blog/solution-to-day-4-of-7-days-of-js/" title="Solution to day 4 of 7 days of JS">here</a>.

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/7-days-of-js-reverse-a-string/",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/7-days-of-js-reverse-a-string/",
 "headline": "7 Days of JS: Reverse a String",
 "alternativeHeadline": "Day 4 of 7 Days of JS",
 "genre": "JavaScript", 
 "keywords": [
  "javascript", 
  "challenge", 
  "programming"
],  
 "wordcount": "76",
 "datePublished": "2019-12-02",
 "dateCreated": "2019-12-02",
 "dateModified": "2024-06-25",
 "description": "4th Day of 7 Days of JS",
 "isFamilyFriendly": "true",
 "image": "https://lautarolobo.xyz/images/7daysJS-7f7d8328.webp",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/7-days-of-js-where-is-my-element",frontmatter:{title:"7 Days of JS: Where is My Element",date:"2019-12-03T23:20:00.000Z",tags:["JavaScript","Challenge"],image:"/images/7daysJS.webp",author:"Lautaro Lobo"},content:`
Welcome to day 5 of 7 Days of JavaScript! Today we will code a classic function that:

- Takes two parameters: an element and an array of elements
- Returns the position of the element inside the array. If the element is not in the array, returns -1.

Wish you luck!

You can see the solution <a href="https://lautarolobo.xyz/blog/solution-to-day-5-of-7-days-of-js/" title="Solution to Day 5 of 7 Days of JS">here</a>.

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/7-days-of-js-where-is-my-element/",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/7-days-of-js-where-is-my-element/",
 "headline": "7 Days of JS: Where is My Element",
 "alternativeHeadline": "Day 5 of 7 Days of JS",
 "genre": "JavaScript", 
 "keywords": [
  "javascript", 
  "challenge", 
  "programming"
],  
 "wordcount": "55",
 "datePublished": "2019-12-03",
 "dateCreated": "2019-12-03",
 "dateModified": "2024-06-25",
 "description": "5th Day of 7 Days of JS",
 "isFamilyFriendly": "true",
 "image": "https://lautarolobo.xyz/images/7daysJS-7f7d8328.webp",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/continuous-deployment-on-hostinger",frontmatter:{title:"Continuous Deployment on Hostinger",date:"2019-07-17T06:37:00.000Z",tags:["Git","GitHub","Hostinger"],image:"/images/git-plus-hostinger.webp",author:"Lautaro Lobo"},content:`
I couldn't find any good guide about this topic, so I wrote it my self!

First things first, what is Continuous Deployment? Really broad: you change the file, test it, build it and gets deployed (gets live) automatically.

Sounds good, isn't it?

Let's see how we can make this happen!

> _This tutorial assumes that you have your site on a repository at GitHub, and a configured account on Hostinger. If that's not your case, [upload your files to Github](https://github.com/new) and [join to Hostinger](https://www.hostg.xyz/aff_c?offer_id=6&aff_id=19988) and you'll be ready to go._

## On Hostinger

- Go to your cPanel > Advanced > Git.

- Add your repository address, where you have all your site's files (Images, Stylesheets, everything must be in this repo). Copy and paste the address that shows up when your click on the "Clone or download" button founded at your GitHub repository. Leave everything else as it is, unless you [know](https://help.github.com/en/articles/about-branches) what you're doing.

- You may have read somewhere that your public_html folder must be empty. Absolutelly right, on your left bar, go to Files > File Manager.

- There, click the green button.

- Now delete all what is there (be sure to have a backup, just in case).

- Now go back to Git on cPanel, and click the Manage button at the side of the repo you just added, and then click on Auto Deployment.

- A Webhook is an HTTP callback (HTTP POST), that occurs when an specific event happens. In this case, when a commit takes place on your repo. There's also [that GitHub guide](https://developer.github.com/webhooks/creating/) about setting up Webhooks, but I found my explanation more straight to the point. After you copied the Webhook URL let's go to the second easy-peazy part.

## On GitHub

- Get into your site's GitHub repository, and go to Settings > Webhooks > Add webhook.

- There, paste the URL that you copied from Hostinger into the _Payload URL_ field. At _Content type_ select the _application/json_ option, and everything else as it is. Change things on your own risk! (actually nothing bad can happen, just, it may be won't work as expected). After that, click the green button.

## That's it!

Now you have Continuous Deployment [on Hostinger](https://www.hostg.xyz/aff_c?offer_id=6&aff_id=19988), through Git.

Use the comments to say thanks if this was worth your time, and share to someone who may be interested. On the unlikely case where things didn't work to you, tell me in the comments below and I'll give you a hand, see you next time!

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/continuous-deployment-on-hostinger",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/continuous-deployment-on-hostinger",
 "headline": "Continuous Deployment on Hostinger",
 "alternativeHeadline": "Connecting Git on Hostinger",
 "genre": "Web Development", 
 "keywords": [
  "Hostinger", 
  "Continuous Deployment", 
  "Dev Ops", 
  "Git" ,
  "GitHub"
],  
 "wordcount": "426",
 "datePublished": "2019-07-17",
 "dateCreated": "2019-07-17",
 "dateModified": "2024-06-25",
 "description": "Wondered how to set Continuous Deployment on Hostinger? Me too! That's why I wrote this post.",
 "isFamilyFriendly": "true",
 "image": "https://lautarolobo.xyz/images/git-plus-hostinger-9cfb1753.jpg",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/february-of-fortran",frontmatter:{title:"February of Fortran",date:"2020-02-29T18:07:00.000Z",tags:["Fortran"],image:"/images/february-of-fortran.webp",author:"Lautaro Lobo"},content:`
## What is Fortran?

Fortran is a 63 y.o. programming language developed by IBM for scientific and engineering applications. Its name is an acronym from **FORmula TRANslation**, and still being in use for that purpose.

It's a general-purpose programming language, but best suited for computationally intensive areas like computational physics, computational chemistry, high-performance computing and so.

Many programming languages were based on or influenced by, Fortran. And it has received many updates among the years, last one in 2018.

It was originally conceived as FORTRAN, all uppercase, in 1956. 5 updates later, in the 90s, it became Fortran. The update also added many other changes like free-form source, inline comments, modules, recursive procedures, dynamic memory allocation and many other changes that make the language _modern-er_.

## How to Compile and Run a Fortran Program

Let's say you want to compile and run your first Fortran program, like this one:

\`\`\`f90
program HelloWorld
 implicit none
 print*, "hello world"
 write(*,*) "hello world"
end program

! it should return:
! hello world
! hello world
\`\`\`

Well, you should make a series of things:

- Install [gfortran](https://gcc.gnu.org/wiki/GFortran), which is a Fortran compiler.
- Save your code with .f90 extension (even if you are writing in Fortran 2015, .f90 it's the standard file extension).
- Compile with gfortran.
- Run your program as you would run any C program.

And that's how you do it!

## What is Fortran Used For

Fortran is still in use in HPC (High Performace Computing). All that is mathematical chunk is probably done with Fortran. It's widely used in scientific computing from Chemistry and Physics to Astronomy and Mathematics.

I can almost hear the masses... why not Python?

In fact, you can use Python in those areas. But even if Python is a better choice in many cases, you wouldn't use it in HPC, since Fortran is _performant-er_. It may take more time to write, but sometimes code performance means everything.

You know, even that Python has evolved, wasn't born exclusively for Physicists and Mathematicians.

As I've read somewhere:

> At the end of the day, Physicists are writing very different programs than Computer Scientists with very different goals and concerns.

You may say that Physicists are not willing to change, or that there's a lot of Fortran legacy code out there, but even then, Fortran keeps being the best choice for some HPC projects, or Physics calculations.

But that doesn't mean that you can only use Fortran. Other programming languages used in HPC are C and C++, both being faster than Fortran in many cases, or the somehow-new [Julia](https://julialang.org/) that is [slowly entering the market](https://www.hpcwire.com/2020/01/14/julia-programmings-dramatic-rise-in-hpc-and-elsewhere/), is also faster than Fortran and it was developed by MIT exclusively for HPC and all scientific computing.

If you want to see a detailed comparison between Python, C++, and Fortran on scientific computing, check out [this amazing paper](http://downloads.hindawi.com/journals/sp/2014/870146.pdf).

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/february-of-fortran",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/february-of-fortran",
 "headline": "February of Fortran",
 "alternativeHeadline": "February of Fortran",
 "genre": "Fortran", 
 "keywords": [
  "fortran", 
  "february", 
  "programming",
  "coding",
  "computational physics",
  "high-performance computing"
],  
 "wordcount": "476",
 "datePublished": "2020-02-29",
 "dateCreated": "2020-02-29",
 "dateModified": "2024-06-25",
 "description": "February smells like Fortran right? Well, maybe not but, is Fortran still something?",
 "isFamilyFriendly": "true",
 "image": "https://lautarolobo.xyz/images/february-of-fortran-653ed35e.webp",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://lautarolobo.xyz/images/100px-3211424c.jpg"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/first-haskell-function",frontmatter:{title:"Your First Haskell Function",date:"2019-05-02T00:42:00.000Z",tags:["Haskell"],author:"Lautaro Lobo"},content:`
Your first Haskell function. Who would say that you would come this far, ah.

A function takes some parameters and shows up an output, after a computational process that used the parameters in some way.

The function that we are going to define today, since it's the first one, will be basic. You will give it two numbers and it'll sum them, giving you back a single number. But, what kind of number? Any number? Actually not, this function will work with just Integers. You will clarifiy this by writing the _type_ of the function.

The first thing that you should know about writing functions in Haskell, is that you should always define the type of the function before you define the function itself, if you don't define it, Haskell will figure out which type is the best to match with your function, most of the time it will figure it out right, but some times may miss match the inferenced type and your function won't work.

\`\`\`haskell
sumBoth :: Int -> Int -> Int
\`\`\`

We defined the type; it takes one Integer, then another Integer, and the output will be an Integer, great. You may have noticed that I named the function "sumBoth", this is because it's important that the function's name tells you what that particular function does and also, the name should be short, so when you call it you won't waste much time writing it. It may seem a silly advise but trust me, getting used to good practices will save you tons of bugs.

Now, the function definition:

\`\`\`haskell
sumBoth x y = x + y
\`\`\`

And that's it! Now save your file with _.hs_ extension, and then open up the terminal, we will test this function there. Go to the directory where you saved your file and simply write

\`\`\`console
ghci
\`\`\`

You'll see something like this:

\`\`\`console
GHCi, version x.y.z: http://www.haskell.org/ghc/  :? for help
Prelude>
\`\`\`

There write

\`\`\`console
:load filename.hs
\`\`\`

And this should show up:

\`\`\`console
[1 of 1] Compiling Main             ( filename.hs, interpreted )
Ok, modules loaded: Main.
*Main>
\`\`\`

Then call sumBoth and in the line below you'll see the result:

\`\`\`console
*Main> sumBoth 5 4
9
\`\`\`

<hr></hr>

Something went wrong? Please [tell me](mailto:contact@lautarolobo.xyz) and I'll be glad to help you out!

Want to try the next level? [Go ahead!](https://lautarolobo.xyz/blog/recursive-function-haskell)

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/first-haskell-function",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/first-haskell-function",
 "headline": "Your First Haskell Function",
 "alternativeHeadline": "You won't be a total newbie at Haskell anymore!",
 "genre": "Haskell", 
 "keywords": [
  "Haskell", 
  "Programming", 
  "Computer Science"
],  
 "wordcount": "380",
 "datePublished": "2019-05-01",
 "dateCreated": "2019-05-01",
 "dateModified": "2024-06-25",
 "description": "You want to go deeper in Haskell? Well, let's do it! We will define our first function, easy peasy.",
 "isFamilyFriendly": "true",
 "image": "https://imgsafe.org/image/5709e8ceba",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/here-are-5-reasons-why-you-need-to-go-to-a-hackathon",frontmatter:{title:"Here Are 5 Reasons Why You Need to Go to a Hackathon",date:"2019-10-17T15:00:00.000Z",tags:["Hackathon"],image:"/images/hackatrix.webp",author:"Lautaro Lobo"},content:`
Here's why you need to go to a Hackathon, bullet-pointed:

- <a href="#h2-1">To Network</a>
- <a href="#h2-2">To Learn</a>
- <a href="#h2-3">To Build</a>
- <a href="#h2-4">To Listen</a>
- <a href="#h2-5">To Have Fun</a>

But first, let me tell you more about the Hackathon which I attended 2 weeks ago, the Hackatrix. That's when I got inspired to write this post.

The Hackatrix was organized by Belatrix, an international software factory recently bought by an even more international software factory: Globant.

It was lovely, big thanks to the organizers! Cool prices and cool food through the full day.

It was my second time attending the Hackatrix, and their 5th edition in Buenos Aires.

I was on a different team than the year before, which is great because that way you get to know new people! We built a platform to connect volunteers with nonprofit organizations, using the create-react-app boilerplate, adding Bootstrap and Redux, and even an API wrote that day by one of the team members using Kotlin. Fact: that guy was a Backend magician.

You can take a look at the code [here.](https://github.com/hackathon-prost/)

We ended up being on the half that passed the technical interview and went to the final exposition. Although we didn't win, I can say that it was an awesome experience, I'll get back to the Hackatrix next year for sure!

Well, that's it about the recap, now let's see why YOU should go to a Hackathon too!

<h2 id="h2-1">To Network</h2>

On Hackathons you get to know people. You get to know a possible future employee, employer, someone with you may end up working with... or even someone that will become a friend!

Yes, it may happen too, that you never see them again. But listen, the feeling of sharing the experience with them will never leave you.

You will share thoughts, experiences. Why not, right?

<h2 id="h2-2"> To Learn </h2>

Guess what, your team members will teach you things. That always happens. And you will even teach some stuff to others too, reinforcing your knowledge about that specific topic.

You will gain confidence when sharing your ideas and your project with others.

And you will need to ask for help at some time. Don't be shy, do it! You'll learn new stuff.

<h2 id="h2-3"> To Build </h2>

You will end up with a cool project to enlarge your resume.

If you really like the project, you can keep working on the project before the Hackathon ends. You may even end up with a functional app uploaded on the Google Play Store, or something like that. If you give it steroids (not real steroids... you know what I mean), you will end up with those popping-everywhere things... a Startup!

<h2 id="h2-4"> To Listen </h2>

At any Hackathon, you'll hear about some cool and brand-new projects and ideas. Your teammates will talk to you about career-path, jobs and experiences, all invaluable pieces of information.

Don't stay quiet, but neither talk all day or you are going to lose many insights that will refresh your soul, get you motivated, and lead you in a good way.

<h2 id="h2-5"> To Have Fun </h2>

Finally, the most important thing: have fun! That's what life is all about, right?

Smile. Laugh a bit. You may don't get the cool merchandise, either a small price, but you end up fresh, new, motivated, with a cool project to showcase. You get out as a different person, more mature, or more capable to work on your next project.

---

Now, find a Hackathon near you and go!

<a href="https://giphy.com/gifs/just-do-it-shia-UqZ4imFIoljlr5O2sM">
  <div style="width:80%;height:0;padding-bottom:75%;position:relative;margin-left:10%;">
    <iframe
      src="https://giphy.com/embed/UqZ4imFIoljlr5O2sM"
      width="100%"
      height="100%"
      style="position:absolute"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    ></iframe>
  </div>
</a>

You'll have a blast.

Comment below if you have participated in a Hackathon, to inspire others to go!

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/here-are-5-reasons-why-you-need-to-go-to-a-hackathon/",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/here-are-5-reasons-why-you-need-to-go-to-a-hackathon/",
 "headline": "Here's Why You Need to go to a Hackathon, Bullet-Pointed",
 "alternativeHeadline": "",
 "image": "https://lautarolobo.xyz/images/hackatrix-cb1b1607.png",
 "genre": "Hackathon", 
 "keywords": [
  "Hackathon",
  "Coding Competition", 
  "Coding Challenge", 
  "Computer Science"
],  
 "wordcount": "687",
 "datePublished": "2019-10-17",
 "dateCreated": "2019-10-17",
 "dateModified": "2024-06-25",
 "description": "Hackathons everywhere but, are they worthy? For sure! And here's why.",
 "isFamilyFriendly": "true",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/how-machine-learning-5g-and-data-science-will-be-critical-to-the-future-of-the-internet-of-things",frontmatter:{title:"How Machine Learning, 5G and Data Science Will be Critical to the Future of the Internet of Things",date:"2019-09-30T15:20:00.000Z",tags:["Neural Networks","AI","Machine Learning","Deep Learning","Internet of Things","Data Science"],image:"/images/cincoge.webp",author:"Lautaro Lobo"},content:`
By 2020, the total number of Internet-connected devices will be between 25-50 billion.

This is a deep dive into the future of the Internet of Things and the challenges to come with the rise of new technologies and big amounts of data collected by all these connected devices.

<div id="index">

<h4> Index </h4>
 
<ul>

<li>
  <a href="#h2-1">What 5G has new</a>
</li>
<li>
  <a href="#h2-2">How IoT will benefit from 5G</a>
</li>
<li>
  <a href="#h2-3">How IoT goes hand-to-hand with Data Science and Machine Learning</a>
</li>
<li>
  <a href="#h2-4">Summary</a>
</li>

</ul>

</div>

<h2 id="h2-1"> What 5G has new </h2>

5G is:

- Less battery consuming
- 20+ times faster than 4G LTE
- Able to support up to a million devices per km²

### Less battery consuming

We all know it, 4G drains battery like a champ.

But don’t worry, 5G will be less battery consuming than 4G, the International Telecommunications Union is working on it. They are a part of the ONU and the ones that are working strong to develop 5G.

The changes in the latency, among other measures, will make 5G less battery consuming than 4G.

Won't make your battery last forever, but hopefully a few hours more.

### 20+ times faster than 4G LTE

The max download speed on 4G LTE is on 64 Mbps/s. The max download on 5G is more than 1 Gb/s.

And this stills in development. It's expected to have a download speed at a minimum of... 20 Gbs/s!

<a href="https://giphy.com/gifs/bye-looney-tunes-running-away-xT39CVCn6Eq8Ve9FZu" alt="Road Runner from Looney Tunes">
  <div style="width:100%;height:0;padding-bottom:67%;position:relative;">
    <iframe
      src="https://giphy.com/embed/xT39CVCn6Eq8Ve9FZu"
      width="100%"
      height="100%"
      style="position:absolute"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    ></iframe>
  </div>
</a>

Want some more real data?

Qualcomm made a test at San Franciso. The median 4G user was browsing on 71 Mbps/s. Browsing speed increased to 1.4 Gbs/s to the median 5G user.

They made a similar test on Frankfurt. This time they saw a jump from 56 Mbps/s on browsing speed on the median 4G user, to more than 490 Mbps/s for the median 5G user.

Impressive, right?

### Able to support up to a million devices per km²

Yeap, it's true. It's in the official specifications.

But, how?

Well, among other things, 5G uses higher frequencies than 4G. Extremely high. That helps to support more devices, without the speed decreases.

<h2 id="h2-2"> How IoT will benefit from 5G </h2>

There are tons of systems already made. Tons of devices out there gathering data, making someone's life easier. But how we can make the IoT experience even better?

To tackle this we need to first that are different 'layers' where IoT is being applied. As examples: financial, educational, health care, military and so on.

The real challenge comes on connecting these layers, making IoT smarter, and more helpful for the final user. In one word, better.

This IoT network would be also a step forward to smart cities, if well implemented.

Where 5G come in?

Well, to build these networks, sharing data between devices, we would need a better Internet. Higher bandwidth and lower latency, for name some. All things that 5G delivers.

<h2 id="h2-3">
  {" "}
  How IoT goes hand-to-hand with Data Science and Machine Learning{" "}
</h2>{" "}

IoT needs data to either represent better services to users or to enhance IoT framework performance.

There are thousands of devices in every city, each of these smart devices stores data of its users and handles it.

We know the name of this big quantity of diverse data: Big Data.

Intelligent processing and analysis of this Big Data is the key to developing smart IoT applications.

All this information gathered becomes more relevant in big cities, cities that are getting closer to the definition of smart-cities, that have all these devices connected with in-depth online experiences and tons of data of every citizen, every device and every system.

This Big Data without context, without "meaning", won't be really useful.

Here Data Science steps on. A way to find patterns and new insights from data through different techniques.

Data Scientists will work on collecting all this data, giving more context and relating all the different layers, to create these online experiences and improve them, getting to understand the users' behavior.

In the beginning, most of the Data Scientists will be tagging all this Big Data. In the future, a <a href="https://lautarolobo.xyz/blog/neural-networks-101/" target="_blank">Neural Network</a> will do this work, but to train this Neural Network, there must be some good quantity of tagged data to start with.

Then, the Data Scientists will work on giving all this Big Data more context, more meaning, and developing charts and visualizations to better understand it.

But this giant network of small devices may be insecure. Too many small devices, too many entry points, a public network...

So, how can we make all these more secure?

Machine Learning!

Just use some good encryption algorithm, and then an extra layer of <a href="https://www.infosecurity-magazine.com/next-gen-infosec/machine-learning-applying/" alt="Machine Learning Concepts on Cryptography">Machine Learning encryption</a>, to make it <a href="https://en.wikipedia.org/wiki/Neural_cryptography" alt="Neural Cryptography">even more secure</a>. If the network is not easy to hack, then these devices won't be easy to hack. Also, we will be protecting the users' privacy, which is something that we must always have in mind.

Let's now get back and remember that 5G will be less energy-consuming than 4G. But with Machine Learning, we can improve even more energy usage! Using some smart algorithms we can improve the network usage, so if the device is not active and there is no need to collect data, we can disconnect the device from the network, or keep the network usage very low.

This way we won't overcharge the network. We know that 5G supports a lot of devices connected but, you know, prevention.

More on, we'll optimize costs. Being that smart will make these devices work for longer periods and also, with less energy used, less money spent.

What if you want to make things behave based on your personal preferences, on your everyday activities?

Machine Learning again!

<center>
  <img src="/images/MLmeme.jpeg" alt="Machine Learning Meme"></img>
</center>

Let's say you every day make your coffee for breakfast from Monday to Friday at the same hour each day. Then, thanks to a Machine Learning algorithm that searches for similarities in the usage of your smart devices, you may automate your coffee machine to do it for you.

Sounds cool, right? Well, it's not so far from reality... this is actually <a href="https://ideaing.com/ideas/best-smart-coffee-makers/" alt="Best Smart Coffee-Makers">a thing </a> today!

There are more uses of Machine Learning in IoT. A Neural Network may be trained to predict maintenance.

Algorithms can find the devices that tend to fail, letting us know that those particular devices must be improved and replaced, or removed from the system.

Knowing when a device will fail, or when will start to fail, gives repairmen a huge advantage. They can schedule better the workdays. Enterprises can predict costs and know beforehand with much certainty when and how much they will be spending on repairs.

And this gives a huge advantage to the user too. The service providers will be able to replace devices before they fail, making a better UX, and preventing possible risks and malfunctions (like a coffee machine burning your coffee, your car velocimeter working crazy or a water tank overfilling).

<h2 id="h2-4"> Summary </h2>

> Hundreds of computers in a room could seem intimidating at first, just as hundreds of volts coursing through wires in the walls did at one time.

This is a quote taken from <a href="https://en.wikipedia.org/wiki/Mark_Weiser">Mark Weiser</a>'s famous paper <a href="https://www.ics.uci.edu/~corps/phaseii/Weiser-Computer21stCentury-SciAm.pdf">"The Computer for the 21st Century"</a>. He was talking about this newly conceived concept of ubiquitous computing.

Now we may say that he was talking about the Internet of Things... before it was actually a thing!

This somehow dystopic, Sci-Fi scenario, it's not quite distant from us. We are getting there. We are already there.

With these tiny computers in every room, we have some tasks to address, some technologies to discuss, to improve, to use. Machine Learning algorithms will be critical, not only for managing the data but also for the sake of our privacy.

If experts in these fields <a href="https://blogs-images.forbes.com/louiscolumbus/files/2019/03/average-base-salary.jpg" alt="indeed.com salary charts">are needed now</a>, imagine in the future, when 5G will support even more devices connected to the network, when more data will be collected every day. It's an industry that will never stop growing, for good or wrong.

All the gathered information from the IoT must be used to make smarter decisions, with responsibility and taking care of the user's privacy. Something that every person working on the field must have in mind.

<hr></hr>

Do you think I forgot about something? Do you have any experience in IoT? Use the comments box!

If you found this post somehow cool, share it with your somehow cool friends!

Stay tunned from my next post!

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/how-machine-learning-5g-and-data-science-will-be-critical-to-the-future-of-the-internet-of-things/",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/how-machine-learning-5g-and-data-science-will-be-critical-to-the-future-of-the-internet-of-things/",
 "headline": "How Machine Learning, 5G and Data Science Will be Critical to the Future of the Internet of Things",
 "alternativeHeadline": "What's Coming on Internet of Things",
 "image": "https://lautarolobo.xyz/images/cincoge-d568d5df.webp",
 "genre": "Internet of Things", 
 "keywords": [
  "Artificial Neural Networks",
  "Internet of Things", 
  "Neural Networks", 
  "Computer Science", 
  "Artificial Intelligence",
  "AI",
  "Machine Learning",
  "Deep Learning",
  "Data Science",
  "Ubiquitous Computing",
  "5G",
  "4G",
  "Smart Cities",
  "Big Data"
],  
 "wordcount": "1375",
 "datePublished": "2019-09-30",
 "dateCreated": "2019-09-30",
 "dateModified": "2024-06-25",
 "description": "Machine Learning to understand the Big Data collected from Internet of Things. That says it all.",
 "isFamilyFriendly": "true",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/ids-vs-classes-a-css-specificity-chapter",frontmatter:{title:"IDs vs Classes: a CSS Specificity Chapter",date:"2019-08-25T03:20:00.000Z",tags:["CSS"],image:"/images/g945.webp",author:"Lautaro Lobo"},content:`
Who will win? IDs or classes?

We may be able to answer this question by looking at the context, and the differences between each one.

Let's jump right in!

## What is CSS Specificity?

CSS Specificity is like a rank, that determines which set of rules will be applied to an element instead of other sets of rules.

If the browser finds two conflicting styles pointing to the same element, it will apply the rules with higher 'ranking'.

When writing CSS, you should always remember this:

> inline style > #id > .class > element

That's the CSS Specificity Hierarchy between the CSS Selectors.

The all-mighty styles that would be applied no matter what, are the inline styles. Next, if there are no inline styles, the ID selector takes the lead. Among the other two, the class styles have a higher ranking than the element type ones.

## Benefits of using them wisely

- You'll get less conflicting styles
- You'll find and correct conflicting styles faster
- You'll understand better what's happening in your stylesheet
- You'll end up with a better CSS code (cleaner, shorter, more readable)

## Differences between each CSS Selector

### Inline styles

Most of the times these styles are never used. Why? Well, to write better code more _humanly-readable_, it's better to have the CSS code all in one place: an external file.

Using inline styles is often seen as a bad practice. You are mixing HTML code with CSS so your code will be larger and harder to read and often harder to write too.

Try to avoid it.

### IDs

IDs are unique, meaning that:

- there's only one ID per element
- there's only one element with that particular ID on the page

IDs are often used when adding JavaScript code, for performance sakes. But we are talking about CSS here! When adding styles, IDs are usually avoided because the code won't end up being scalable nor modular. You can't reuse styles, and if you are working on a big site, that will slow down the development process.

### Classes

Classes are not unique, meaning that:

- the same class can be used on different elements
- the same element can have different classes

The common practice is to use mostly (if not only) classes for CSS.

Like said before, you can apply the same styles to different elements, ending up with less and easier to read code.

This approach works better with big websites when you don't want to write over and over again styles to each element, just give a set of rules for a class and give all the desired elements the same class. And if you want to add some different styles, add another class and problem solved.

### Element type

By using these you are styling the element ('tag') that has the specified name, like:

\`\`\`css
div \\{
    font-family: Roboto;
    border-radius: 4px;
}
\`\`\`

It's not really specific, right?

If you use 'div' as the selector, you'll apply those styles to _all_ the divs of your website.

Why would you do that?

There are plenty of divs on your site, ones on the footer, others on the navbar, on the header, some may contain text, others images...

There is no good rule of thumb on when to use type selectors. Just use classes a lot and add type selectors whenever possible, to keep specificity levels low, preventing styling conflicts.

## Summary

You should keep the specificity levels low, so when a styling conflict shows up, you can easily solve it. The way to do it is using element type selectors and classes most of the times, along with pseudo-classes and attributes, avoiding IDs and inline styles.

Also, as told before, <a href="https://dev.to/clairecodes/reasons-not-to-use-ids-in-css-4ni4" hreflang="en" rel="external">classes have several advantages over IDs.</a>

So in the war between IDs and classes, classes win. But hey! You know the differences now, and keep in mind that there may be cases when using an ID selector would be better than using a class, so keep your eyes open!

There are some other good posts on the topic that I encourage for further reading:

- <a
    href="https://www.w3schools.com/css/css_specificity.asp"
    hreflang="en"
    rel="external"
  >
    W3S: CSS Specificity
  </a>
- <a
    href="https://dev.to/emmawedekind/css-specificity-1kca"
    hreflang="en"
    rel="external"
  >
    Emma Wedekind on Dev: CSS Specificity
  </a>
- <a
    href="https://css-tricks.com/the-difference-between-id-and-class/"
    hreflang="en"
    rel="external"
  >
    CSS Tricks: The Difference Between ID and Class
  </a>{" "}

<hr></hr>

I hope that this post has somehow helped you. Thanks for reading!

PS: Consider subscribing to my monthly newsletter down below to get my recent posts right into your inbox 😉

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/ids-vs-classes-a-css-specificity-chapter",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/ids-vs-classes-a-css-specificity-chapter",
 "headline": "IDs vs Classes: a CSS Specificity Chapter",
 "alternativeHeadline": "Which one should I use? IDs or Classes?",
 "image": "https://lautarolobo.xyz/images/g945-afa10c28.png",
 "genre": "Web Development", 
 "keywords": [
  "CSS", 
  "Web Development", 
  "Web Design", 
  "Front-End" ,
  "UX",
  "UI"
],  
 "wordcount": "778",
 "datePublished": "2019-08-25",
 "dateCreated": "2019-08-25",
 "dateModified": "2024-06-25",
 "description": "Thousands of Web Developers asked the question, which one should I use? IDs or Classes? We will answer this question by explaining what CSS Specificity is and how it's related to the correct usage of CSS selectors",
 "isFamilyFriendly": "true",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/installing-ghc-in-linux",frontmatter:{title:"Installing Haskell Compiler in Linux",date:"2019-04-21T14:14:00.000Z",tags:["Haskell","Linux"],author:"Lautaro Lobo"},content:`
Assuming that you know what Haskell is (if not, [read this brief introduction](https://lautarolobo.xyz/blog/what-s-haskell/)), and you know what the Glasgow Haskell Compiler is (check [this](https://en.wikipedia.org/wiki/Glasgow_Haskell_Compiler) if you don't), I'll show you how to get GHC up and running in your computer.

First things first, open the terminal and type:

\`\`\`console
sudo apt-get install haskell-platform
\`\`\`

This command should work on the most common Linux distros out there ([Debian](https://www.debian.org/index.en.html), [Mint](https://linuxmint.com/), [Ubuntu](https://www.ubuntu.com/)).

Press Enter, and you will be asked to type your password, after you type it you'll see a list of sugested packages, those won't be installed, and a list of the packages that will be installed, with the amount of space that they are willing to occupe in your drive. Classic pre-installation info. Then you must type _s_ if you want to proceed with the installation, or _n_ if you regret.

Have in mind that the installation process once you type _s_, may take some time depending in your internet conection.

Following this simple operation, you have your Glasgow Haskell Compiler installed, ready to use.

If you want to make sure that it's installed, just open the terminal and simply type:

\`\`\`console
ghci
\`\`\`

Therefore you should see in your console something like this:

\`\`\`console
GHCi, version x.y.z: http://www.haskell.org/ghc/  :? for help
Prelude>
\`\`\`

{" "}
<hr></hr>

Didn't work? [Tell me](mailto:contact@lautarolobo.xyz) what went wrong and I'll be glad to help you out!

If you want to write your first Haskell function and test it with GHC, [click me!](https://lautarolobo.xyz/blog/first-haskell-function/)

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/installing-ghc-in-linux",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/installing-ghc-in-linux",
 "headline": "Installing Haskell Compiler in Linux",
 "alternativeHeadline": "How To Install GHC",
 "genre": "Haskell", 
 "keywords": [
  "Programming", 
  "Haskell", 
  "Compiler", 
  "Computer Science" ,
  "Linux"
], 
 "wordcount": "275",
 "datePublished": "2019-04-21",
 "dateCreated": "2019-04-21",
 "dateModified": "2024-06-25",
 "description": "If you want to test Haskell in your own computer like a real developer, you must have GHC, come and find what it is!",
 "isFamilyFriendly": "true",
 "image": "https://imgsafe.org/image/5709e8ceba",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/is-virtualization-enabled",frontmatter:{title:"Is Virtualization Technology Enabled On My PC?",date:"2019-06-24T20:55:00.000Z",tags:["Linux"],author:"Lautaro Lobo"},content:`
Interested in virtual machines? And you need to know if your PC can run them? Well, you are in the right place!

First the never-fails one:

\`\`\`
lscpu
\`\`\`

This command shows a lot of information about your PC, in fact, about your CPU architecture, displaying the number, model, family, and manufacturer ID of your CPU, together with the threads, cores, sockets, nodes and so on. You should search for the line that contains the Virtualization keyword (don't worry, it's easy to find).

Actually that's it. That command _never_ fails. But here are another options, because some times the unpredictable happens.

With the next one, you'll get 'vmx' (Intel) or 'smv' (AMD) on the output. Hopefully colored.

\`\`\`
egrep "(svm|vmx)" /proc/cpuinfo
\`\`\`

If it doesn't shows those keywords with colors, don't worry, I got you covered:

\`\`\`
egrep --color -i "svm|vmx" /proc/cpuinfo
\`\`\`

Here, the last one. If nothing worked out, don't lose hope! This one will do the job.

Some OS come with the cpu-checker package pre-installed. It may be not your case, so here's how you can installit, quick and easy with

\`\`\`
sudo apt-get install cpu-checker
\`\`\`

And then, let the magic happens:

\`\`\`
sudo kvm-ok
\`\`\`

If you have virtualization enabled, you'll see something like

\`\`\`
INFO: /dev/kvm exists
KVM acceleration can be used
\`\`\`

Otherwise:

\`\`\`
INFO: Your CPU does not support KVM extensions
KVM acceleration can NOT be used
\`\`\`

<hr></hr>

Well, that's it for now. Any thought write it down in the comments. See you next time!

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/is-virtualization-enabled",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/is-virtualization-enabled",
 "headline": "Is Virtualization Enabled On My PC?",
 "alternativeHeadline": "VTX or AMD On My PC?",
 "genre": "main tag", 
 "keywords": [
  "Linux", 
  "VTX", 
  "AMD", 
  "AMD-v" ,
  "Virtual Machine",
  "Virtualization Technology"
],  
 "wordcount": "246",
 "datePublished": "2019-06-24",
 "dateCreated": "2019-06-24",
 "dateModified": "2024-06-25",
 "description": "Let's find out if your PC can run a Virtual Machine!",
 "isFamilyFriendly": "true",
 "image": "https://imgsafe.org/image/5709e8ceba",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/january-of-javascript",frontmatter:{title:"January of JavaScript",date:"2020-01-22T14:01:00.000Z",tags:["JavaScript"],image:"/images/january-of-javascript.webp",author:"Lautaro Lobo"},content:`
It's January. Time to talk about JavaScript. How was it born? Why is it called like that? Is it really that popular? Let's find out!

## A Little Bit Of History

JavaScript was born in December of 1995 when Netscape announced it's rollout. The guy behind the work? Brendan Eich, a Computer Scientist working at that time in Netscape. He's known as the father of JavaScript, because of his titanic work on the language before it's rollout.

Fun fact: JavaScript was named Mocha, then LiveScript, and finally they changed it once and for all to the name that we all know now.

And why is it called 'Java'-'Script'? Well, quoting Brendan:

> [...] It was all within six months from May till December (1995) that it was Mocha and then LiveScript. And then in early December, Netscape and Sun did a license agreement and it became JavaScript. And the idea was to make it a complementary scripting language to go with Java, with the compiled language.

A co-marketing deal between Netscape and Sun.

In fact, Oracle acquired Sun Microsystems in 2009, so "JAVASCRIPT" is a trademark of Oracle. How crazy is that?

In 1997, ECMAScript was born. But what is ECMAScript? It's a standard, a specification of a programming language, published by ECMA (European Computer Manufacturers Association) International. So JavaScript is a dialect of the ECMAScript standard.

That's right, ECMAScript _defines_ a programming language, and JavaScript _is_ the programming language.

There were different versions of the standard since it first came out. Today, every modern web browser supports ECMAScript 5.1, and almost everyone supports the latest version, ECMAScript 6. Newer versions are still in the early stages of development.

Are you confused yet? To make it simpler, ECMAScript is like the version, and JavaScript is the language itself.

For a more-of-a-timeline of the history of JavaScript, check:

[The Weird History of JavaScript](https://dev.to/codediodeio/the-weird-history-of-javascript-2bnb)

## Weird Stuff

When using JS, you may find some weird stuff going one, like that NaN (which stands for Not a Number) it's a... number:

\`\`\`javascript
console.log(typeof NaN); // number
\`\`\`

And NaN it's not NaN ¿?

\`\`\`javascript
console.log(NaN === NaN); // false
\`\`\`

And that NaN is an infinite number. Wait... what?

\`\`\`javascript
console.log(isFinite(NaN)); // false
\`\`\`

And you know what's the weirdest part? You should expect JS to behave like this! I mean, this is all on the specs.

<center>
  <a href="https://giphy.com/gifs/CDJo4EgHwbaPS">
    <iframe
      src="https://giphy.com/embed/CDJo4EgHwbaPS"
      width="480"
      height="254"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    ></iframe>
  </a>
</center>

You can take a look at more weird stuff here:

[Do you know these weird parts of JavaScript?](https://dev.to/qjlee/do-you-know-these-weird-parts-of-javascript-48pg)

## What's Next?

As I said before, there are some newer versions of the ECMAScript standard on development. But in so early stages that we shouldn't expect JS to change much anytime soon.

After all, you can already use JS on almost anything: Videogames, AI, Back-End, Front-End, Art, Data Analytics...

And many frameworks and libraries are popping up every day. [Svelte](https://svelte.dev/) has changed the paradigm of website rendering. There's this thing called [CSS-in-JS](https://cssinjs.org/?v=v10.0.3). You can even write Artificial Neural Networks with [Tensorflow.js](https://www.tensorflow.org/js), develop videogames with [Babylon.js](https://github.com/BabylonJS/Babylon.js), make art using [p5.js](https://p5js.org/), [automate stuff with NodeJS](https://medium.com/dailyjs/how-i-automated-my-job-with-node-js-94bf4e423017), [even make charts based on .csv files!](https://observablehq.com/@dakoop/learn-js-data)

Dang that's broad, right?

So yeah, it's a smart move to learn JavaScript. It's used all around the web and even in non-web environments, for good or bad. In fact, from the [Stack Overflow Developer Survey of 2019](https://insights.stackoverflow.com/survey/2019) we can say that it's the most commonly used programming language. And the top Libraries and Frameworks are also JS-based.

It seems like JS is staying with us for a while.

---

Hey, thanks for reading until this far! If you are starting your journey on JavaScript, or just want to train yourself a bit, check my [#7DaysJS Challenge!](https://lautarolobo.xyz/blog/7-days-of-js-factorial-and-average/)

See ya!

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/january-of-javascript",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/january-of-javascript",
 "headline": "January of JavaScript",
 "alternativeHeadline": "JavaScript on January",
 "genre": "JavaScript", 
 "keywords": [
  "javascript", 
  "january", 
  "programming",
  "coding"
],  
 "wordcount": "617",
 "datePublished": "2019-01-17",
 "dateCreated": "2019-01-17",
 "dateModified": "2024-06-25",
 "description": "It's January, time to talk about JavaScript",
 "isFamilyFriendly": "true",
 "image": "https://imgsafe.org/image/5709e8ceba",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/neural-networks-101",frontmatter:{title:"Neural Networks 101",date:"2019-07-31T15:21:00.000Z",tags:["Neural Networks","AI","Machine Learning","Deep Learning"],image:"/images/ANN-cover.webp",author:"Lautaro Lobo"},content:`
> This post is about Artificial Neural Networks. Computer Science != Biology.

## Summary

- What is a Neural Network?
- What are Neural Networks used for?
- Structure of a Neural Network
- How Neural Networks work
- How to improve the learning process

## What is a Neural Network?

A Neural Network is a computational model inspired by biological neural networks, like yours and mine.

![](/images/ANN-comparison.png)

A key concept here is that these models learn from examples (inputs), without being programmed with any task-specific rule.

## What are they used for?

- Image and voice recognition.
- Text generation.
- Genetical analysis.
- Language translations.
- Autonomous driving.
- Fraud prevention.

## Structure of a Neural Network

### Different layers

- Input
- Hidden (interconnected)
- Output

<img
  src="/images/Neural-Network-Structure.jpg"
  alt="Structure of a Neural Network"
></img>

Each layer has a specific amount of neurons. And every neuron connects with another neuron from a different layer, it can't connect to a neuron from the same layer unless you use a <a href="https://towardsdatascience.com/recurrent-neural-networks-d4642c9bc7ce" target="_blank">Recurrent Neural Network.</a>

## How Neural Networks work

Explaining this is not a simple task.

First of all, your Neural Network must "learn". In other words, you must train them.

How do you train a Neural Network?

Well, you pass information to the input layer, that is already processed. This is easier to get through an example.

Let's say you pass to the input layer 500 cat pictures, with the tag 'cat pictures', so the Neural Network knows that those are cat pictures. Then, you start to pass some cat pictures not tagged, and the network will taggit on its own. Also, you can pass it some car pictures, bird pictures, a non-sense picture, whatever, and your network should not taggit with 'cat picture'.

if it tags some images wrong, you can warn the network of its mistakes, and it will learn from them.

You can repeat this process many times until you are happy with how your Neural Network works, and there you have it. A trained Neural Network, ready to work.

Now use it! Pass to the input layer some non-tagged pictures, and see how well it does it.

If the output is not what you expected, you should train it more, or improve the learning process. I'll talk more about this in the next lines.

But now, let's get nerdy.

Your Neural Network works because identifies a pattern on the 'cat pictures' images. Then starts to "memorize" that pattern... somehow learns that this particular set of pixels (a bunch of ones & zeros) goes inside the 'cat pictures' tag, then it can tag cat images without our help.

Every neuron gets these inputs, sums all those weights, and outputs come out. Before going to the next layer, this output goes through an activation function. This function adds to the output an “activation rate”, telling the next neuron much important is this data. More in-depth math in <a href="https://medium.com/coinmonks/the-mathematics-of-neural-network-60a112dd3e05" target="_blank" alt="The Mathematics of Neural Networks on Medium">here.</a>

<table>
  <tr>
    <th>
      <img src="/images/Neuron-Structure.png" alt="Structure of a Neuron"></img>
    </th>
  </tr>
  <tr>
    <td>Inputs coming in, sum, activation function, outputs coming out.</td>
  </tr>
</table>

This is how neurons process data but wait, there's more!

These outputs can go to the next layer, and also can go to a previous layer.

This process when the data goes to a previous layer is known as backpropagation. Thanks to it, data gets processed several times. This may help you or not, depending on the problem that you are willing to solve with your network.

Also, a friendly advice, _size matter_. If your network's size is too small or too big, it won't be able to group the data, the outputs will always be wrong, so you would need to find your network's perfect size.

In the majority of cases, you would find this through trial and error, until you build your intuition.

## How to improve the learning process

Through regularization.

This is a broad concept, that includes a bunch of techniques. More common ones are weight regularization, [early stopping](https://en.wikipedia.org/wiki/Early_stopping), learning rate decay, <a src="https://www.quora.com/What-is-data-augmentation-in-deep-learning" target="_blank">data augmentation,</a> and dropout.

These are all measurements to prevent <a href="https://youtu.be/DEMmkFC6IGM" target="_blank" alt="Neural Networks - Overfitting">overfitting</a> and <a href="https://youtu.be/0h8lAm5Ki5g" target="_blank" alt="Artificial Neural Networks: Underfitting">underfitting.</a>

<hr></hr>

Want to become an expert on Neural Networks? Get the exclusive lectures <a href="javascript:;" onclick="ml_webform_1427060('show')">right into your inbox!</a>

Do you have any questions? Do you think that I may be missing something? Write it down in the comments!

See ya!

<script>
  var ml_webform_1427060 = ml_account('webforms', '1427060', 'n8u0c3', 'load');
  ml_webform_1427060('animation', 'fadeIn');
<\/script>

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/neural-networks-101",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/neural-networks-101",
 "headline": "Neural Networks 101",
 "alternativeHeadline": "A friendly introduction to Artificial Neural Networks",
 "genre": "Neural Networks", 
 "keywords": [
  "Artificial Neural Networks", 
  "Neural Networks", 
  "Computer Science", 
  "Artificial Intelligence",
  "AI",
  "Machine Learning",
  "Deep Learning"
],  
 "wordcount": "689",
 "datePublished": "2019-07-31",
 "dateCreated": "2019-07-31",
 "dateModified": "2024-06-25",
 "description": "How Artifical Neural Networks work? Well, here it is! Finally!",
 "isFamilyFriendly": "true",
 "image": "https://lautarolobo.xyz/images/ANN-cover-d2927098.jpg",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://lautarolobo.xyz/images/100px-3211424c.jpg"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/recursive-function-haskell",frontmatter:{title:"A Recursive Function in Haskell",date:"2019-05-17T20:05:00.000Z",tags:["Haskell","Recursion"],author:"Lautaro Lobo"},content:`
import Latex from "src/content/latex.astro";

<img src="/images/wowed-sculpture.webp" alt="WOW" title="WOWed Sculpture"></img>Ready
to get your head cracked? Ok, let's define a simple function that multiplies each
number of a list of numbers by 2. We will give this function the name of "by2".

So, you have a function that takes a list of numbers as a parameter, and after the computation process shows a list of numbers. How do you write this in Haskell? Well:

\`\`\`haskell
by2 :: [Int] -> [Int]
\`\`\`

The brackets represent a list of something, in this case Integers. This is how you define a _type_ in Haskell, I talked about that in [my previous post.](https://lautarolobo.xyz/blog/first-haskell-function)

Once the type is defined, the next step is to define the actual function. First, you call the function, with the parameters, and then you type the process that the function must do, at the end, you should have something like this:

\`\`\`haskell
by2 x:xs = (2 * x) : by2 xs
\`\`\`

<img src="/images/whatt.webp" alt="What?" title="What?"></img>
Hm, let me explain what is that code saying, you have a list with at least one
element (an Integer in this case), by2 takes the first element and multiplies it
by 2, nothing new, but then I'm including the element multiplied by 2 in... the
function without the first element? Seems weird? Well, next and last line of
code, and then I will explain much deeply a few concepts that you need to know
to fully understand this function.

\`\`\`haskell
by2 [] = []
\`\`\`

First af all, I'm ussing _pattern matching_, a way to defining functions that compares patterns, the one given in the function definition with the paramater given. If you want to know more about it, check [this](http://learnyouahaskell.com/syntax-in-functions#pattern-matching).

Remember at the start when I sayd "a simple function"? When, actually I may have been wrong, this one is not quite simple, because introduces an important concept besides pattern matching, _recursion_. by2 is a recursive function, meaning that the function is applied inside its own definition. To make a function work with recursion, you must make the recursive call smaller that the parameter given. Go back to your code and you will se this, the first element of the list is no more appearing in the recursive call of by2. Also, you always need to write your base case, the smaller case that the function may encounter, in this case is a list with no elements, just like in the second line of code that I showed you. Then, the recursive call will be getting smaller until the parameter given to the function will be... an empty list! And there, each element, in order, will be inserted in this list.

It's tough to understand, you may get it better with an example:

\`\`\`console
by2 [7,3,5]
[14,6,10]
\`\`\`

This is what happened there:

<Latex
  formula="
  (2 \\times 7) \\triangleright by2 [3,5] \\rightarrow 
  (2 \\times 7) \\triangleright ((2 \\times 3) \\triangleright by2 [5]) \\rightarrow 
  (2 \\times 7) \\triangleright ((2 \\times 3) \\triangleright ((2 \\times 5) \\triangleright by2 [\\hspace{2mm}])) \\rightarrow 
  (2 \\times 7) \\triangleright ((2 \\times 3) \\triangleright ((2 \\times 5) \\triangleright [\\hspace{2mm}])"
></Latex>

And then, solves the multiplications and each number goes back where it was; 10 goes inside the empty list, then 6 and last 14.

Well, I think we explained a few concepts in the way, pattern matching and recursion. But... have you tried the function? Open the terminal, then the compiler, load your file and test by2!

You can try other parameters, like the empty list, or a list with words. Start playing around, changing the definition of by2, creating a by3, or a plus2; new functions that accept more and different parameters, with new definitions.

If anything went wrong, [tell me](mailto:contact@lautarolobo.xyz) and I'll be glad to help you out!

You've made it this far, kid. Impressive. Don't stop learning!

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/recursive-function-haskell",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/recursive-function-haskell",
 "headline": "A Recursive Function in Haskell",
 "alternativeHeadline": "Recursion 101",
 "genre": "Haskell", 
 "keywords": [
  "Programming", 
  "Haskell", 
  "Recursion", 
  "Computer Science" 
],
 "wordcount": "583",
 "datePublished": "2019-05-17",
 "dateCreated": "2019-05-17",
 "dateModified": "2024-06-25",
 "description": "This is the next level in Haskell programming, we are going to define a simple function applying recursion!",
 "isFamilyFriendly": "true",
 "image": "https://imgsafe.org/image/5709e8ceba",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/solution-to-day-1-of-7-days-of-js",frontmatter:{title:"Solution to Day 1 of 7 Days of JS",date:"2019-11-29T22:48:00.000Z",tags:["JavaScript","Challenge"],image:"/images/solutionday1.webp",author:"Lautaro Lobo"},content:`
First of all, we have a functional solution, not the best solution (it may take some time to run with large numbers), but a solution at least:

\`\`\`javascript
function factorial(n)
\\{
    if (n==0 || n==1)\\{
      return 1;
    }
    else \\{
      return n * factorial( n-1 );
    }
}

console.log(factorial(5))
\`\`\`

The good thing is that is pretty easy to read.

Now, a better solution would be something like this:

\`\`\`javascript
function factorial(n)\\{
  let j = 1;
  for (let i = 1; i <= n; i++)\\{
    j = j * i;
  }
  return j;
}

console.log(factorial(5))
\`\`\`

An imperative solution using a for loop. This makes our function run faster.

Now let's see the average function. First of all, a solution using a for loop:

\`\`\`javascript
function average(array) \\{
  let count = array.length;
  if (count == 0)\\{
    return 0;
  } else \\{
    var sum = 0;
    for (var i = 0; i < count; i++) \\{
    sum = sum + array[i];
  }
  return sum / count;
  }
}

console.log(average([2,4]))
\`\`\`

I also made it using the \`reduce()\` method and an arrow function. Something weird came out:

\`\`\`javascript
function average(array) \\{
  let count = array.length;
  if (count == 0)\\{
    return 0;
  } else \\{
     return array.reduce( (a,b) => a + b) / count;
  }

}

console.log(average([2,5,2]));
\`\`\`

That's not very readable, so I prefer the first solution, which btw runs faster.

Both solutions have if and else statements, and you probably noticed why: to return 0 when the input is an empty array, and not some weird error, or the good ol' \`NaN\`.

Any questions? Leave a comment!

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/solution-to-day-1-of-7-days-of-js",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/solution-to-day-1-of-7-days-of-js",
 "headline": "Solution to Day 1 of 7 Days of JS",
 "alternativeHeadline": "7 Days of JS: Solution to Day 1",
 "genre": "JavaScript", 
 "keywords": [
  "javascript",  
  "challenge",
  "Computer Science", 
  "programming" 
],  
 "wordcount": "198",
 "datePublished": "2019-11-29",
 "dateCreated": "2019-11-29",
 "dateModified": "2024-06-25",
 "description": "This is the solution to the first day of the #7DaysofJS challenge",
 "isFamilyFriendly": "true",
 "image": "https://lautarolobo.xyz/images/solutionday1-1e41eef8.webp",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/solution-to-day-2-of-7-days-of-js",frontmatter:{title:"Solution to Day 2 of 7 Days of JS",date:"2019-11-30T15:27:00.000Z",tags:["JavaScript","Challenge"],image:"/images/solutionday2.webp",author:"Lautaro Lobo"},content:`
Let's see. First of all a solution using a while loop:

\`\`\`javascript
function sumboth(array) \\{
  let count = array.length;
  let i = 0, even = 0, odd = 0;
  while (i < count) \\{
    array[i] % 2 == 0 ? even += array[i] : odd += array[i];
    i++;
  }
  return \\{even, odd};
}

console.log(sumboth([3,1,6,2]))
\`\`\`

And as a second choice, a solution using a for loop:

\`\`\`javascript
function sumboth2(array) \\{
  let count = array.length;
  let even = 0, odd = 0;
  for (let i = 0; i < count; i++) \\{
    array[i] % 2 == 0 ? even += array[i] : odd += array[i];
  }
  return \\{even, odd};
}

console.log(sumboth2([3,1,4,2]))
\`\`\`

I've used the conditional (ternary) operator:

\`\`\`javascript
condition ? inCaseIsTrue : inCaseIsFalse;
\`\`\`

You can read more about it <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" target="_blank" title="conditional (ternary) operator">here</a>.

Any questions? Leave a comment!

See you in the next challenge!

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/solution-to-day-2-of-7-days-of-js",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/solution-to-day-2-of-7-days-of-js",
 "headline": "Solution to Day 2 of 7 Days of JS",
 "alternativeHeadline": "Solution to Day 2 of 7 Days of JS",
 "genre": "JavaScript", 
 "keywords": [
  "javascript", 
  "challenge", 
  "programming"
],  
 "wordcount": "46",
 "datePublished": "2019-11-30",
 "dateCreated": "2019-11-30",
 "dateModified": "2024-06-25",
 "description": "This is the solutions to the second day of #7DaysJS",
 "isFamilyFriendly": "true",
 "image": "https://imgsafe.org/image/5709e8ceba",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/solution-to-day-3-of-7-days-of-js",frontmatter:{title:"Solution to Day 3 of 7 Days of JS",date:"2019-12-01T21:35:00.000Z",tags:["JavaScript","Challenge"],image:"/images/solutionday3.webp",author:"Lautaro Lobo"},content:`
I wrote first the solution using a while loop:

\`\`\`javascript
function sign(array) \\{
  let count = array.length;
  let i = 0, positives = 0, negatives = 0, zeros = 0;
  while (i < count) \\{
    if (array[i] === 0) \\{
      zeros += 1;
    } if (array[i] > 0)\\{
      positives += 1;
    } if (array[i] < 0)\\{
      negatives += 1;
    }
    i++;
  }
  return \\{zeros, positives, negatives};
}

console.log(sign([-3,0,6,2]))
\`\`\`

And it works! Then, I wrote the same but with a for loop:

\`\`\`javascript
function sign(array) \\{
  let count = array.length;
  let positives = 0, negatives = 0, zeros = 0;
  for (let i = 0; i < count; i++) \\{
    if (array[i] === 0) \\{
      zeros += 1;
    } if (array[i] > 0)\\{
      positives += 1;
    } if (array[i] < 0)\\{
      negatives += 1;
    }
  }
  return \\{zeros, positives, negatives};
}

console.log(sign([3,-1,0,-2]))
\`\`\`

You may want to write this function using the \`Math.sign()\` method. You can read about it <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign" target="_blank" title="Math.sign() JavaScript method">here</a>.

Do you have a different solution? Share it in the comments!

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/solution-to-day-3-of-7-days-of-js",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/solution-to-day-3-of-7-days-of-js",
 "headline": "Solution to Day 3 of 7 Days of JS",
 "alternativeHeadline": "Solution to Day 3 of 7 Days of JS",
 "genre": "JavaScript", 
 "keywords": [
  "javascript", 
  "challenge", 
  "programming"
],  
 "wordcount": "50",
 "datePublished": "2019-12-01",
 "dateCreated": "2019-12-01",
 "dateModified": "2024-06-25",
 "description": "This is the solution to the 3th day of #7DaysJS",
 "isFamilyFriendly": "true",
 "image": "https://imgsafe.org/image/5709e8ceba",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/solution-to-day-4-of-7-days-of-js",frontmatter:{title:"Solution to Day 4 of 7 Days of JS",date:"2019-12-02T17:48:00.000Z",tags:["JavaScript","Challenge"],image:"/images/solutionday4.webp",author:"Lautaro Lobo"},content:`
So, first the shortest solution:

\`\`\`javascript
function reverseString(string) \\{
  return string.split('').reverse().join('');
}

console.log(reverseString('Japan'))
\`\`\`

I've used 3 methods here: \`split()\`, \`reverse()\` and \`join()\`. The split method turns the string into an array of characters, then I use the reverse method, that reverses (duh) the array, and then I take the array of characters and make it look again like a string.

Then I cracked my head up to make it work with a for loop:

\`\`\`javascript
function reverseString(string) \\{
  let length = string.length - 1;
  let output = '';
  for (let i = length; i >= 0; i--)
    output += string[i];
  return output;
}

console.log(reverseString('Bananas'))
\`\`\`

And also implemented this same algorithm as a while loop:

\`\`\`javascript
function reverse(string) \\{
  let output = '';
  let i = string.length - 1;
  while (i >= 0)\\{
    output += string[i];
    i--;
  }
  return output;
}

console.log(reverse('goodbye'))
\`\`\`

Do you have any questions? Write a comment!

Cheers!

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/solution-to-day-4-of-7-days-of-js",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/solution-to-day-4-of-7-days-of-js",
 "headline": "Solution to Day 4 of 7 Days of JS",
 "alternativeHeadline": "Solution to Day 4 of 7 Days of JS",
 "genre": "JavaScript", 
 "keywords": [
  "javascript", 
  "challenge", 
  "programming"
],  
 "wordcount": "85",
 "datePublished": "2019-12-02",
 "dateCreated": "2019-12-02",
 "dateModified": "2024-06-25",
 "description": "This is the solution to the 4th day of #7DaysJS",
 "isFamilyFriendly": "true",
 "image": "https://imgsafe.org/image/5709e8ceba",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/solution-to-day-5-of-7-days-of-js",frontmatter:{title:"Solution to Day 5 of 7 Days of JS",date:"2019-12-04T00:03:00.000Z",tags:["JavaScript","Challenge"],image:"/images/solutionday5.webp",author:"Lautaro Lobo"},content:`
As before, I first made it with a while loop:

\`\`\`javascript
function positionOf(n,array)\\{
  let i = 0;
  let count = array.length;
  while (i < count)\\{
    if (array[i] == n)\\{
      return i;
    } else \\{
      i++;
    }
  }
  return -1;
}

console.log(positionOf(5,[-5,0,50,5,35]))
\`\`\`

And then, a for loop:

\`\`\`javascript
function positionOf1(n,array)\\{
  let count = array.length;
  for (let i = 0; i < count; i++)\\{
    if (array[i] == n)\\{
      return i;
    }
  }
  return -1;
}

console.log(positionOf1(3,[-3,0,3,5,35]))
\`\`\`

Do you have a better solution? Share it in the comments!

See you on day 6!

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/solution-to-day-5-of-7-days-of-js",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/solution-to-day-5-of-7-days-of-js",
 "headline": "Solution to Day 5 of 7 Days of JS",
 "alternativeHeadline": "7 Days of JS - Solution to Day 5",
 "genre": "JavaScript", 
 "keywords": [
  "javascript", 
  "challenge", 
  "programming"
],  
 "wordcount": "31",
 "datePublished": "2019-12-03",
 "dateCreated": "2019-12-03",
 "dateModified": "2024-06-25",
 "description": "This is the solution to the 5th day of #7DaysJS",
 "isFamilyFriendly": "true",
 "image": "https://imgsafe.org/image/5709e8ceba",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/solution-to-day-6-of-7-days-of-js",frontmatter:{title:"Solution to Day 6 of 7 Days of JS",date:"2019-12-04T12:26:00.000Z",tags:["JavaScript","Challenge"],image:"/images/solutionday6.webp",author:"Lautaro Lobo"},content:`
I first wrote this code using the \`push()\` method:

\`\`\`javascript
function sumToArray(n, array)\\{
  let length = array.length;
  let output = []
  for (let i = 0; i < length; i++)\\{
    output.push(array[i]+n);
  }
  return output;
}

console.log(sumToArray(5,[1,2,3,4]))
\`\`\`

Then, using concatenation:

\`\`\`javascript
function sumToArray1(n, array)\\{
  let length = array.length;
  let output = []
  for (let i = 0; i < length; i++)\\{
    output += (n + array[i] + '.');
  }
  return output;
}

console.log(sumToArray1(5,[2,3,5]))
\`\`\`

This returns a string, not an array.

And finally, using the \`map()\` method:

\`\`\`javascript
function sumToArray2(n, array)\\{
  return array.map(function (element)\\{
    return element + 2;
  })
}

console.log(sumToArray2(1,[7,13,2]))
\`\`\`

Any question? Write a comment!

See ya!

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/solution-to-day-6-of-7-days-of-js",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/solution-to-day-6-of-7-days-of-js",
 "headline": "Solution to Day 6 of 7 Days of JS",
 "alternativeHeadline": "7 Days of JS - Solution to Day 6",
 "genre": "JavaScript", 
 "keywords": [
  "javascript", 
  "challenge", 
  "programming"
],  
 "wordcount": "32",
 "datePublished": "2019-12-04",
 "dateCreated": "2019-12-04",
 "dateModified": "2019-06-25",
 "description": "This is the solution to the 6th day of #7DaysJS",
 "isFamilyFriendly": "true",
 "image": "https://imgsafe.org/image/5709e8ceba",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/solution-to-day-7-of-7-days-of-js",frontmatter:{title:"Solution to Day 7 of 7 Days of JS",date:"2019-12-05T11:19:00.000Z",tags:["JavaScript","Challenge"],image:"/images/solutionday7.webp",author:"Lautaro Lobo"},content:`
When writing this solution, I realized that I needed a function that returns \`true\` if a number is prime. So I wrote that function first:

\`\`\`javascript
function isPrime(n)\\{
  let i = 2, rem = true;
  while (i < n && rem)\\{
    rem = rem && n % i != 0;
    i++;
  }
  return rem;
}

console.log(isPrime(17))
\`\`\`

And once I had that, I was ready to write primesUntil, which you can see here:

\`\`\`javascript
function primesUntil(n)\\{
  let x = 1, i = 0;
  while(i < n)\\{
    x++;
    if (isPrime(x))\\{
      console.log(x);
      i++;
    }
  }
  return 'Those are the first ' + n + ' primes.'
}

console.log(primesUntil(5))
\`\`\`

It's possible to write both functions with for loops instead of while loops. If you are just starting out with loops in JavaScript, you should try to do that.

Any questions? Write a comment!

This is the end of our journey. But don't worry, I'll be back soon with more challenges. If you don't want to miss them, follow me on [DEV](https://dev.to/lautarolobo "My DEV Profile") \`&&\` [Pinterest](http://pinterest.com/lautarolobo/ "My Pinterest Profile") \`&&\` [Twitter](https://twitter.com/jordan12ok "My Twitter Profile") \`&&\` <a href="javascript:;" onclick="ml_account('webforms', '1426892', 'g8s3m6', 'show')" title="My Newsletter">I have a newsletter!</a> 😊

See you soon!

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/solution-to-day-7-of-7-days-of-js",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/solution-to-day-7-of-7-days-of-js",
 "headline": "Solution to Day 7 of 7 Days of JS",
 "alternativeHeadline": "7 Days of JS - Solution to Day 7",
 "genre": "JavaScript", 
 "keywords": [
  "javascript", 
  "challenge", 
  "programming"
],  
 "wordcount": "111",
 "datePublished": "2019-12-05",
 "dateCreated": "2019-12-05",
 "dateModified": "2024-06-25",
 "description": "This is the solution to the last day of #7DaysJS",
 "isFamilyFriendly": "true",
 "image": "https://imgsafe.org/image/5709e8ceba",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/use-javascript-and-html5-to-code-a-fractal-tree",frontmatter:{title:"Use JavaScript and HTML5 to Code a Fractal Tree",date:"2020-04-16T15:40:00.000Z",tags:["JavaScript","Fractals","HTML5"],image:"/images/fractal_cover.webp",author:"Lautaro Lobo"},content:`
Fractals, those enigmatic figures that are everywhere, but can not be seen by the untrained eye. Today we'll draw one of the best-known Fractals, using only Vainilla JS and the HTML5's Canvas API. Let's code!

<div id="index">

<h4> Index </h4>
 
<ul>

<li>
  <a href="#h2-1">What is a Fractal Tree?</a>
</li>
<li>
  <a href="#h2-2">Writing the Fractal Tree in Vainilla JS</a>
</li>
<li>
  <a href="#h2-3">Beyond the Fractal Tree</a>
</li>

</ul>

</div>

<h2 id="h2-1"> What is a Fractal Tree? </h2>

To define a Fractal Tree first we must know the definition of Fractal, of course.

Fractals are never-ending patterns created by repeating mathematical equations, which on any scale, on any level of zoom, look roughly the same. In other words, a geometric object which's basic structure, rough or fragmented, repites itself in different scales.

So if we split a Fractal, we'll see a reduced-size copy of the whole.

Benoit Mandelbrot, which coined the term Fractal in 1975, said:

> A Fractal is a shape made of parts similar to the whole in some way.

Pretty clear, right?

Here are some examples:

<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Von_Koch_curve.gif" alt="Animated Von Koch Curve"></img>
<p><table><td><center>Von Koch Curve</center></td></table></p>

<img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Animated_Sierpinski_carpet.gif" alt="Animated Sierpinski Carpet"></img>
<p><table><td><center>Sierpinski Carpet</center></td></table></p>
</center>

Now, what is a Fractal Tree?

Imagine a branch, and branches coming out of it, and then two branches coming out of each branch, and so on... that's what a Fractal Tree looks like.

Its form comes from the Sierpinski triangle (or Sierpinski gasket).

As you can see, one becomes the other when changing the angle between branches:

<center>
  ![From Sierpinski Triangle to Fractal
  Tree](https://upload.wikimedia.org/wikipedia/commons/a/a9/Fractal_tree.gif)
</center>

Today we'll end up with a figure similar to the final form of that gif.

<h2 id="h2-1"> Writing the Fractal Tree in Vanilla JS </h2>

First of all, here's the final product (you can tweak it along the way):

<center>![Final Fractal Tree](/images/fractalTree.webp)</center>

Now let's draw that, step by step.

First of all, we initialize our index.html file, with a canvas of any reasonable dimensions, and a script tag where all our JS code will be.

\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <canvas id="my_canvas" width="1000" height="800"></canvas>
    <script><\/script>
  </body>
</html>
\`\`\`

Then, we start writing our JavaScript.

We initialize our canvas element on JS, by accessing it through the myCanvas variable and creating the 2D rendering context with the ctx (context) variable.

\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <canvas id="my_canvas" width="1000" height="800"></canvas>
    <script>
      var myCanvas = document.getElementById("my_canvas");
      var ctx = myCanvas.getContext("2d");
    <\/script>
  </body>
</html>
\`\`\`

So yeah, the getContext method adds properties and methods that allow you to draw, in this case, in 2D.

Now it's time to think. How can we define the algorithm to draw a Fractal tree? Hm... 🤔

Let's see, we know that the branches keep becoming smaller. And that each branch ends with two branches coming out of it, one to the left and one to the right.

In other words, when a branch is long enough, attach two smaller branches to it. Repeat.

It kinda sounds like we shall use some recursive statement somewhere, isn't it?

Back to the code, we now define our function \`fractalTree\` that should take at least four arguments: the X and Y coordinates where the branch starts, the length of its branch and its angle.

Inside our function, we begin the drawing with the beginPath() method, and then save the state of the canvas with the save() method.

\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <canvas id="my_canvas" width="1000" height="800"></canvas>
    <script>
      var myCanvas = document.getElementById("my_canvas");
      var ctx = myCanvas.getContext("2d");
      function draw(startX, startY, len, angle) {
          ctx.beginPath();
          ctx.save();
      }
    <\/script>
  </body>
</html>
\`\`\`

The beginPath method is often used when you start a new line or figure that has a fixed style, like the same color along the entire line, or the same width. The save method just saves the entire state of the canvas by pushing the current state onto a stack.

Now we'll draw our Fractal Tree, by drawing a line (branch), rotating the canvas and drawing the next branch, and so on. It goes like this (I'll explain each method below the code sample):

\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <canvas id="my_canvas" width="1000" height="800"></canvas>
    <script>
      var myCanvas = document.getElementById("my_canvas");
      var ctx = myCanvas.getContext("2d");
      function draw(startX, startY, len, angle) {
          ctx.beginPath();
          ctx.save();

          ctx.translate(startX, startY);
          ctx.rotate(angle * Math.PI/180);
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -len);
          ctx.stroke();

          if(len < 10) {
              ctx.restore();
              return;
          }

          draw(0, -len, len*0.8, -15);
          draw(0, -len, len*0.8, +15);

          ctx.restore();
      }
      draw(400, 600, 120, 0)
    <\/script>
  </body>
</html>
\`\`\`

So we first add three methods, translate, rotate and moveTo, which 'moves' the canvas, its origin and our 'pencil' so we can draw the branch in our desired angle. It's like we are drawing a branch, then centering this branch (by moving the hole canvas) and then drawing a new brand from the end of our previous branch.

The last two methods before the if statement are lineTo and stroke, the first adds a straight line to the current path and the second one renders it, you can think of it like this: lineTo gives the order and stroke executes it.

Now we have an if statement that tells when to stop the recursion, when to stop drawing. The restore method, as stated in the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore), "restores the most recently saved canvas state by popping the top entry in the drawing state stack".

After the if statement we have the recursive call, and another call to the restore method. And then a call to the function that we just finished.

Now run the code in your browser. You'll see, finally, a Fractal Tree!

<center>![Fractal Tree First Iteration](/images/fractalTree1.webp)</center>

Awesome, right? Now let's make it even better.

We'll add a new parameter to our draw function, branchWidth, to make our Fractal Tree more realistic.

\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <canvas id="my_canvas" width="1000" height="800"></canvas>
    <script>
      var myCanvas = document.getElementById("my_canvas");
      var ctx = myCanvas.getContext("2d");
      function draw(startX, startY, len, angle, branchWidth) {
          ctx.lineWidth = branchWidth;

          ctx.beginPath();
          ctx.save();

          ctx.translate(startX, startY);
          ctx.rotate(angle * Math.PI/180);
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -len);
          ctx.stroke();

          if(len < 10) {
              ctx.restore();
              return;
          }

          draw(0, -len, len*0.8, angle-15, branchWidth*0.8);
          draw(0, -len, len*0.8, angle+15, branchWidth*0.8);

          ctx.restore();
      }
      draw(400, 600, 120, 0, 10)
    <\/script>
  </body>
</html>
\`\`\`

So in every iteration, we are making each branch thinner. I've also changed the angle paramater in the recursive call, to make a more "open" tree.

Now, let's add some color! And shadows, why not.

\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <canvas id="my_canvas" width="1000" height="800"></canvas>
    <script>
      var myCanvas = document.getElementById("my_canvas");
      var ctx = myCanvas.getContext("2d");
      function draw(startX, startY, len, angle, branchWidth) {
          ctx.lineWidth = branchWidth;

          ctx.beginPath();
          ctx.save();

          ctx.strokeStyle = "green";
          ctx.fillStyle = "green";

          ctx.translate(startX, startY);
          ctx.rotate(angle * Math.PI/180);
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -len);
          ctx.stroke();

          ctx.shadowBlur = 15;
          ctx.shadowColor = "rgba(0,0,0,0.8)";

          if(len < 10) {
              ctx.restore();
              return;
          }

          draw(0, -len, len*0.8, angle-15, branchWidth*0.8);
          draw(0, -len, len*0.8, angle+15, branchWidth*0.8);

          ctx.restore();
      }
      draw(400, 600, 120, 0, 10)
    <\/script>
  </body>
</html>
\`\`\`

Both color methods are self-explanatory (strokeStyle and fillStyle). Also the shadow ones, shadowBlur and shadowColor.

And that's it! Save the file and open it with your browser to see the final product.

Now I encourage you to play with the code! Change the shadowColor, the fillStyle, make a shorter or longer Fractal Tree, change the angle or try to add leaves, that should be challenging 😉

<h2 id="h2-1"> Beyond the Fractal Tree </h2>

As I showed you at the beginning of this post, there are different Fractals. Ain't gonna be easy to make all them with the Canvas API, but it should be possible. I made some of those in the C programming language, and I've also played around with p5.js.

p5.js is an Open Source JavaScript library made by artists, for artists, based in the [Processing language](https://processing.org/). You can draw, or animate, anything imaginable. If you are interested in making art with code, it's a must. They have a great _get-started_ page that you can check out <a href="https://p5js.org/get-started/" title="p5.js - Get Started">here.</a>

I've also found recently a website that makes a Fractal Tree in JS using L-Systems. Really cool. Take a look into [The Fractal Zone](https://thefractal.zone/)! Code is <a href="https://github.com/Rizz0S/the-fractal-zone" title="The Fractal Zone in GitHub">here</a> 🤓

---

Well, that's it for now! Thanks for reading, comment any questions and see you in my next post! 🧔

> <p style="font-size: 13px;"> Cover by <a href="https://pixabay.com/users/socialtrendspr0-1358346/"> socialtrendspr0 </a> from <a href="https://pixabay.com">Pixabay</a> </p>

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/use-javascript-and-html5-to-code-a-fractal-tree/",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/use-javascript-and-html5-to-code-a-fractal-tree/",
 "headline": "Use JavaScript and HTML5 to Code a Fractal Tree",
 "alternativeHeadline": "How to Code a Fractal Tree with JavaScript and HTML5",
 "genre": "JavaScript", 
 "keywords": [
  "fractals", 
  "fractal", 
  "programming",
  "coding",
  "fractal tree",
  "Canvas API",
  "HTML5"
],  
 "wordcount": "967",
 "datePublished": "2020-04-16",
 "dateCreated": "2020-04-16",
 "dateModified": "2024-06-25",
 "description": "Let's code a Fractal Tree! Nothing weird, Vanilla JavaScript and the Canvas API.",
 "isFamilyFriendly": "true",
 "image": "https://imgsafe.org/image/5709e8ceba",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://lautarolobo.xyz/images/100px-3211424c.jpg"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/what-s-haskell",frontmatter:{title:"What's Haskell?",date:"2019-04-18T20:09:00.000Z",tags:["Haskell"],author:"Lautaro Lobo"},content:`
So, you are new in [Haskell](http://wikipedia.org/wiki/Haskell_programming_language), and you want to know the basis, great!

<img src="/images/haskell-logo.png" alt="Haskell" title="Haskell logo"></img>Haskell
is a _purely functional_ [programming language.](https://en.wikipedia.org/wiki/Programming_language)
What this is? Well, the variables do not change over time, the variable will always
stay setted to the sepcific value given. So, if you called a function twice, with
the same parameters given, the output will be always the same. This property is known
as _referential transparency_. It lets you evaluate a function, and get to know if
it's correct.{" "}

Haskell is known as a _lazy_ programming language. This means that it will do just the bare minimum computation required to show the result of a piece of code (if you tell him to show it).

And not less important, Haskell is _statically typed_ and has _type inference_, so, if you do not specify the [type](https://en.wikipedia.org/wiki/Data_type) of a function, Haskell will intelegently figure it out. And, if you mess up with the types, the [compiler](https://en.wikipedia.org/wiki/Compiler) will tell you the error and, most of the times, specificly show you in wich line is it that everything blowed up. This helps to fix errors in early stages of development, so the probabilities of the program failing once it is released will be decreased.

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/what-s-haskell",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/what-s-haskell",
 "headline": "What's Haskell?",
 "alternativeHeadline": "Brief introduction to Haskell",
 "genre": "Haskell", 
 "keywords": [
  "Haskell", 
  "Programming", 
  "Computer-Science"
], 
 "wordcount": "210",
 "datePublished": "2019-04-18",
 "dateCreated": "2019-04-18",
 "dateModified": "2024-06-25",
 "description": "You are new in Haskell and want to know the base of it. Here I'll show what is Haskell, and what is with it that is so cool.",
 "isFamilyFriendly": "true",
 "image": "https://imgsafe.org/image/5709e8ceba",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`},{group:"blog",slug:"blog/which-linux-distro-am-I-running",frontmatter:{title:"Wich Linux distro am I running?",date:"2019-06-02T16:33:00.000Z",tags:["Linux"],author:"Lautaro Lobo"},content:`
Once I was a Linux Newbie too, and I struggled my self to answer such a frivolous question, so here I have put all these lines of code together, so you won't need to open 7 tabs and try to figure out which one has the key to get that coveted knowledge. This are many methods, so I can asure you that at least one will work on your PC.

Let's jump right into the code:

\`\`\`
hostnamectl
\`\`\`

\`\`\`
gcc --version
\`\`\`

\`\`\`
uname -a
\`\`\`

\`\`\`
lsb_release -a
\`\`\`

\`\`\`
lsb_release -irc
\`\`\`

\`\`\`
lsb_release -ds
\`\`\`

\`\`\`
cat /etc/issue*
\`\`\`

\`\`\`
cat /proc/version
\`\`\`

\`\`\`
cat /etc/*-release
\`\`\`

<hr></hr>
Well, I hope that this has helped to let you know which Linux distro are you
running. Remember that you can approach me [by
email](mailto:contact@lautarolobo.xyz) or [through
Telegram](https://t.me/LautaroLobo). Keep learning kiddo!

<script type="application/ld+json">
\\{
 "@context": "https://schema.org", 
 "@type": "BlogPosting",
 "url": "https://lautarolobo.xyz/blog/which-linux-distro-am-I-running",
 "mainEntityOfPage": "https://lautarolobo.xyz/blog/which-linux-distro-am-I-running",
 "headline": "Wich Linux distro am I running?",
 "alternativeHeadline": "9 ways to know wich Linux distro are you running",
 "genre": "Linux", 
 "keywords": [
  "Debian", 
  "Distro", 
  "Ubuntu",
  "GNU/Linux"
],  
 "wordcount": "107",
 "datePublished": "2019-06-2",
 "dateCreated": "2019-06-2",
 "dateModified": "2024-06-25",
 "description": "This are 9 ways to find out wich Linux distro are you running.",
 "isFamilyFriendly": "true",
 "image": "https://imgsafe.org/image/5709e8ceba",
 "publisher": \\{
  "@type": "Organization",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "logo": \\{  
   "@type": "ImageObject",
   "author": "Lautaro Jordan Lobo Ravarotto",
   "url": "https://imgsafe.org/image/5709e8ceba.png"
   }
  },
 "author": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }
   },
 "creator": \\{
  "@type": "Person",
  "name": "Lautaro Jordan Lobo Ravarotto",
  "url": "https://lautarolobo.xyz",
  "email": "contact@lautarolobo.xyz",
  "birthDate": "2000-04-12",
  "gender": "male",
  "nationality": "Argentina",
  "alumniOf": \\{
   "@type": "CollegeOrUniversity",
   "legalName": "National University of Córdoba",
   "sameAs": "https://en.wikipedia.org/wiki/National_University_of_C%C3%B3rdoba",
   "location": \\{
    "@type": "Place",
    "sameAs": "http://unc.edu.ar",
    "name": "National University of Córdoba",
    "address": \\{
      "@type": "PostalAddress",
      "streetAddress": "Av. Haya de la Torre s/n",
      "addressCountry": "Argentina",
      "addressLocality": "Córdoba",
      "postalCode": "5000" 
      }
     }
    }   
   }
  }
 }
},
<\/script>
`}];function R(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let A=R();function ne(h){A=h}const te=/[&<>"']/,ue=new RegExp(te.source,"g"),ae=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,pe=new RegExp(ae.source,"g"),ge={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},V=h=>ge[h];function v(h,t){if(t){if(te.test(h))return h.replace(ue,V)}else if(ae.test(h))return h.replace(pe,V);return h}const ye=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function me(h){return h.replace(ye,(t,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const fe=/(^|[^\[])\^/g;function f(h,t){let e=typeof h=="string"?h:h.source;t=t||"";const n={replace:(r,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(fe,"$1"),e=e.replace(r,a),n},getRegex:()=>new RegExp(e,t)};return n}function Q(h){try{h=encodeURI(h).replace(/%25/g,"%")}catch{return null}return h}const T={exec:()=>null};function K(h,t){const e=h.replace(/\|/g,(o,a,s)=>{let i=!1,d=a;for(;--d>=0&&s[d]==="\\";)i=!i;return i?"|":" |"}),n=e.split(/ \|/);let r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function N(h,t,e){const n=h.length;if(n===0)return"";let r=0;for(;r<n;){const o=h.charAt(n-r-1);if(o===t&&!e)r++;else if(o!==t&&e)r++;else break}return h.slice(0,n-r)}function be(h,t){if(h.indexOf(t[1])===-1)return-1;let e=0;for(let n=0;n<h.length;n++)if(h[n]==="\\")n++;else if(h[n]===t[0])e++;else if(h[n]===t[1]&&(e--,e<0))return n;return-1}function X(h,t,e,n){const r=t.href,o=t.title?v(t.title):null,a=h[1].replace(/\\([\[\]])/g,"$1");if(h[0].charAt(0)!=="!"){n.state.inLink=!0;const s={type:"link",raw:e,href:r,title:o,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,s}return{type:"image",raw:e,href:r,title:o,text:v(a)}}function we(h,t){const e=h.match(/^(\s+)(?:```)/);if(e===null)return t;const n=e[1];return t.split(`
`).map(r=>{const o=r.match(/^\s+/);if(o===null)return r;const[a]=o;return a.length>=n.length?r.slice(n.length):r}).join(`
`)}class _{options;rules;lexer;constructor(t){this.options=t||A}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:N(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],r=we(n,e[3]||"");return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(/#$/.test(n)){const r=N(n,"#");(this.options.pedantic||!r||/ $/.test(r))&&(n=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){let n=e[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);n=N(n.replace(/^ *>[ \t]?/gm,""),`
`);const r=this.lexer.state.top;this.lexer.state.top=!0;const o=this.lexer.blockTokens(n);return this.lexer.state.top=r,{type:"blockquote",raw:e[0],tokens:o,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const r=n.length>1,o={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const a=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let s="",i="",d=!1;for(;t;){let l=!1;if(!(e=a.exec(t))||this.rules.block.hr.test(t))break;s=e[0],t=t.substring(s.length);let u=e[2].split(`
`,1)[0].replace(/^\t+/,U=>" ".repeat(3*U.length)),p=t.split(`
`,1)[0],g=0;this.options.pedantic?(g=2,i=u.trimStart()):(g=e[2].search(/[^ ]/),g=g>4?1:g,i=u.slice(g),g+=e[1].length);let b=!1;if(!u&&/^ *$/.test(p)&&(s+=p+`
`,t=t.substring(p.length+1),l=!0),!l){const U=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),G=new RegExp(`^ {0,${Math.min(3,g-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),q=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:\`\`\`|~~~)`),Y=new RegExp(`^ {0,${Math.min(3,g-1)}}#`);for(;t;){const H=t.split(`
`,1)[0];if(p=H,this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),q.test(p)||Y.test(p)||U.test(p)||G.test(t))break;if(p.search(/[^ ]/)>=g||!p.trim())i+=`
`+p.slice(g);else{if(b||u.search(/[^ ]/)>=4||q.test(u)||Y.test(u)||G.test(u))break;i+=`
`+p}!b&&!p.trim()&&(b=!0),s+=H+`
`,t=t.substring(H.length+1),u=p.slice(g)}}o.loose||(d?o.loose=!0:/\n *\n *$/.test(s)&&(d=!0));let y=null,w;this.options.gfm&&(y=/^\[[ xX]\] /.exec(i),y&&(w=y[0]!=="[ ] ",i=i.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:s,task:!!y,checked:w,loose:!1,text:i,tokens:[]}),o.raw+=s}o.items[o.items.length-1].raw=s.trimEnd(),o.items[o.items.length-1].text=i.trimEnd(),o.raw=o.raw.trimEnd();for(let l=0;l<o.items.length;l++)if(this.lexer.state.top=!1,o.items[l].tokens=this.lexer.blockTokens(o.items[l].text,[]),!o.loose){const u=o.items[l].tokens.filter(g=>g.type==="space"),p=u.length>0&&u.some(g=>/\n.*\n/.test(g.raw));o.loose=p}if(o.loose)for(let l=0;l<o.items.length;l++)o.items[l].loose=!0;return o}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(/\s+/g," "),r=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:r,title:o}}}table(t){const e=this.rules.block.table.exec(t);if(!e||!/[:|]/.test(e[2]))return;const n=K(e[1]),r=e[2].replace(/^\||\| *$/g,"").split("|"),o=e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const s of r)/^ *-+: *$/.test(s)?a.align.push("right"):/^ *:-+: *$/.test(s)?a.align.push("center"):/^ *:-+ *$/.test(s)?a.align.push("left"):a.align.push(null);for(const s of n)a.header.push({text:s,tokens:this.lexer.inline(s)});for(const s of o)a.rows.push(K(s,a.header.length).map(i=>({text:i,tokens:this.lexer.inline(i)})));return a}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:v(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const a=N(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{const a=be(e[2],"()");if(a>-1){const i=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,i).trim(),e[3]=""}}let r=e[2],o="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);a&&(r=a[1],o=a[3])}else o=e[3]?e[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(n)?r=r.slice(1):r=r.slice(1,-1)),X(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){const r=(n[2]||n[1]).replace(/\s+/g," "),o=e[r.toLowerCase()];if(!o){const a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return X(n,o,n[0],this.lexer)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!r||r[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const a=[...r[0]].length-1;let s,i,d=a,l=0;const u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*t.length+a);(r=u.exec(e))!=null;){if(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!s)continue;if(i=[...s].length,r[3]||r[4]){d+=i;continue}else if((r[5]||r[6])&&a%3&&!((a+i)%3)){l+=i;continue}if(d-=i,d>0)continue;i=Math.min(i,i+d+l);const p=[...r[0]][0].length,g=t.slice(0,a+r.index+p+i);if(Math.min(a,i)%2){const y=g.slice(1,-1);return{type:"em",raw:g,text:y,tokens:this.lexer.inlineTokens(y)}}const b=g.slice(2,-2);return{type:"strong",raw:g,text:b,tokens:this.lexer.inlineTokens(b)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(/\n/g," ");const r=/[^ ]/.test(n),o=/^ /.test(n)&&/ $/.test(n);return r&&o&&(n=n.substring(1,n.length-1)),n=v(n,!0),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=v(e[1]),r="mailto:"+n):(n=v(e[1]),r=n),{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,r;if(e[2]==="@")n=v(e[0]),r="mailto:"+n;else{let o;do o=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(o!==e[0]);n=v(e[0]),e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){let n;return this.lexer.state.inRawBlock?n=e[0]:n=v(e[0]),{type:"text",raw:e[0],text:n}}}}const ve=/^(?: *(?:\n|$))+/,ke=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,xe=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,S=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ce=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,oe=/(?:[*+-]|\d{1,9}[.)])/,re=f(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,oe).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),F=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ae=/^[^\n]+/,B=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Le=f(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",B).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Te=f(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,oe).getRegex(),D="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",M=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Se=f("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",M).replace("tag",D).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ie=f(F).replace("hr",S).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",D).getRegex(),ze=f(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ie).getRegex(),W={blockquote:ze,code:ke,def:Le,fences:xe,heading:Ce,hr:S,html:Se,lheading:re,list:Te,newline:ve,paragraph:ie,table:T,text:Ae},ee=f("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",S).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",D).getRegex(),Ne={...W,table:ee,paragraph:f(F).replace("hr",S).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ee).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",D).getRegex()},Ie={...W,html:f(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",M).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:T,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:f(F).replace("hr",S).replace("heading",` *#{1,6} *[^
]`).replace("lheading",re).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},se=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Pe=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,le=/^( {2,}|\\)\n(?!\s*$)/,_e=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,z="\\p{P}\\p{S}",je=f(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,z).getRegex(),Je=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,De=f(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,z).getRegex(),Ue=f("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,z).getRegex(),He=f("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,z).getRegex(),Oe=f(/\\([punct])/,"gu").replace(/punct/g,z).getRegex(),Re=f(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Fe=f(M).replace("(?:-->|$)","-->").getRegex(),Be=f("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Fe).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),j=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Me=f(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",j).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),he=f(/^!?\[(label)\]\[(ref)\]/).replace("label",j).replace("ref",B).getRegex(),de=f(/^!?\[(ref)\](?:\[\])?/).replace("ref",B).getRegex(),We=f("reflink|nolink(?!\\()","g").replace("reflink",he).replace("nolink",de).getRegex(),E={_backpedal:T,anyPunctuation:Oe,autolink:Re,blockSkip:Je,br:le,code:Pe,del:T,emStrongLDelim:De,emStrongRDelimAst:Ue,emStrongRDelimUnd:He,escape:se,link:Me,nolink:de,punctuation:je,reflink:he,reflinkSearch:We,tag:Be,text:_e,url:T},Ee={...E,link:f(/^!?\[(label)\]\((.*?)\)/).replace("label",j).getRegex(),reflink:f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",j).getRegex()},O={...E,escape:f(se).replace("])","~|])").getRegex(),url:f(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},$e={...O,br:f(le).replace("{2,}","*").getRegex(),text:f(O.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},I={normal:W,gfm:Ne,pedantic:Ie},L={normal:E,gfm:O,breaks:$e,pedantic:Ee};class k{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||A,this.options.tokenizer=this.options.tokenizer||new _,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:I.normal,inline:L.normal};this.options.pedantic?(e.block=I.pedantic,e.inline=L.pedantic):this.options.gfm&&(e.block=I.gfm,this.options.breaks?e.inline=L.breaks:e.inline=L.gfm),this.tokenizer.rules=e}static get rules(){return{block:I,inline:L}}static lex(t,e){return new k(e).lex(t)}static lexInline(t,e){return new k(e).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const n=this.inlineQueue[e];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,e=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(s,i,d)=>i+"    ".repeat(d.length));let n,r,o,a;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(s=>(n=s.call({lexer:this},t,e))?(t=t.substring(n.raw.length),e.push(n),!0):!1))){if(n=this.tokenizer.space(t)){t=t.substring(n.raw.length),n.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(n);continue}if(n=this.tokenizer.code(t)){t=t.substring(n.raw.length),r=e[e.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(n);continue}if(n=this.tokenizer.fences(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.heading(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.hr(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.blockquote(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.list(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.html(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.def(t)){t=t.substring(n.raw.length),r=e[e.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+n.raw,r.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.lheading(t)){t=t.substring(n.raw.length),e.push(n);continue}if(o=t,this.options.extensions&&this.options.extensions.startBlock){let s=1/0;const i=t.slice(1);let d;this.options.extensions.startBlock.forEach(l=>{d=l.call({lexer:this},i),typeof d=="number"&&d>=0&&(s=Math.min(s,d))}),s<1/0&&s>=0&&(o=t.substring(0,s+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o))){r=e[e.length-1],a&&r.type==="paragraph"?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(n),a=o.length!==t.length,t=t.substring(n.raw.length);continue}if(n=this.tokenizer.text(t)){t=t.substring(n.raw.length),r=e[e.length-1],r&&r.type==="text"?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(n);continue}if(t){const s="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let n,r,o,a=t,s,i,d;if(this.tokens.links){const l=Object.keys(this.tokens.links);if(l.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)l.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,s.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(i||(d=""),i=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(l=>(n=l.call({lexer:this},t,e))?(t=t.substring(n.raw.length),e.push(n),!0):!1))){if(n=this.tokenizer.escape(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.tag(t)){t=t.substring(n.raw.length),r=e[e.length-1],r&&n.type==="text"&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):e.push(n);continue}if(n=this.tokenizer.link(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(n.raw.length),r=e[e.length-1],r&&n.type==="text"&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):e.push(n);continue}if(n=this.tokenizer.emStrong(t,a,d)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.codespan(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.br(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.del(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.autolink(t)){t=t.substring(n.raw.length),e.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(t))){t=t.substring(n.raw.length),e.push(n);continue}if(o=t,this.options.extensions&&this.options.extensions.startInline){let l=1/0;const u=t.slice(1);let p;this.options.extensions.startInline.forEach(g=>{p=g.call({lexer:this},u),typeof p=="number"&&p>=0&&(l=Math.min(l,p))}),l<1/0&&l>=0&&(o=t.substring(0,l+1))}if(n=this.tokenizer.inlineText(o)){t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(d=n.raw.slice(-1)),i=!0,r=e[e.length-1],r&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):e.push(n);continue}if(t){const l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return e}}class J{options;constructor(t){this.options=t||A}code(t,e,n){const r=(e||"").match(/^\S*/)?.[0];return t=t.replace(/\n$/,"")+`
`,r?'<pre><code class="language-'+v(r)+'">'+(n?t:v(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:v(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t,e){return t}heading(t,e,n){return`<h${e}>${t}</h${e}>
`}hr(){return`<hr>
`}list(t,e,n){const r=e?"ol":"ul",o=e&&n!==1?' start="'+n+'"':"";return"<"+r+o+`>
`+t+"</"+r+`>
`}listitem(t,e,n){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(t){return`<p>${t}</p>
`}table(t,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,e){const n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return"<br>"}del(t){return`<del>${t}</del>`}link(t,e,n){const r=Q(t);if(r===null)return n;t=r;let o='<a href="'+t+'"';return e&&(o+=' title="'+e+'"'),o+=">"+n+"</a>",o}image(t,e,n){const r=Q(t);if(r===null)return n;t=r;let o=`<img src="${t}" alt="${n}"`;return e&&(o+=` title="${e}"`),o+=">",o}text(t){return t}}class ${strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,n){return""+n}image(t,e,n){return""+n}br(){return""}}class x{options;renderer;textRenderer;constructor(t){this.options=t||A,this.options.renderer=this.options.renderer||new J,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new $}static parse(t,e){return new x(e).parse(t)}static parseInline(t,e){return new x(e).parseInline(t)}parse(t,e=!0){let n="";for(let r=0;r<t.length;r++){const o=t[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const a=o,s=this.options.extensions.renderers[a.type].call({parser:this},a);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){n+=s||"";continue}}switch(o.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const a=o;n+=this.renderer.heading(this.parseInline(a.tokens),a.depth,me(this.parseInline(a.tokens,this.textRenderer)));continue}case"code":{const a=o;n+=this.renderer.code(a.text,a.lang,!!a.escaped);continue}case"table":{const a=o;let s="",i="";for(let l=0;l<a.header.length;l++)i+=this.renderer.tablecell(this.parseInline(a.header[l].tokens),{header:!0,align:a.align[l]});s+=this.renderer.tablerow(i);let d="";for(let l=0;l<a.rows.length;l++){const u=a.rows[l];i="";for(let p=0;p<u.length;p++)i+=this.renderer.tablecell(this.parseInline(u[p].tokens),{header:!1,align:a.align[p]});d+=this.renderer.tablerow(i)}n+=this.renderer.table(s,d);continue}case"blockquote":{const a=o,s=this.parse(a.tokens);n+=this.renderer.blockquote(s);continue}case"list":{const a=o,s=a.ordered,i=a.start,d=a.loose;let l="";for(let u=0;u<a.items.length;u++){const p=a.items[u],g=p.checked,b=p.task;let y="";if(p.task){const w=this.renderer.checkbox(!!g);d?p.tokens.length>0&&p.tokens[0].type==="paragraph"?(p.tokens[0].text=w+" "+p.tokens[0].text,p.tokens[0].tokens&&p.tokens[0].tokens.length>0&&p.tokens[0].tokens[0].type==="text"&&(p.tokens[0].tokens[0].text=w+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:w+" "}):y+=w+" "}y+=this.parse(p.tokens,d),l+=this.renderer.listitem(y,b,!!g)}n+=this.renderer.list(l,s,i);continue}case"html":{const a=o;n+=this.renderer.html(a.text,a.block);continue}case"paragraph":{const a=o;n+=this.renderer.paragraph(this.parseInline(a.tokens));continue}case"text":{let a=o,s=a.tokens?this.parseInline(a.tokens):a.text;for(;r+1<t.length&&t[r+1].type==="text";)a=t[++r],s+=`
`+(a.tokens?this.parseInline(a.tokens):a.text);n+=e?this.renderer.paragraph(s):s;continue}default:{const a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}parseInline(t,e){e=e||this.renderer;let n="";for(let r=0;r<t.length;r++){const o=t[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=a||"";continue}}switch(o.type){case"escape":{const a=o;n+=e.text(a.text);break}case"html":{const a=o;n+=e.html(a.text);break}case"link":{const a=o;n+=e.link(a.href,a.title,this.parseInline(a.tokens,e));break}case"image":{const a=o;n+=e.image(a.href,a.title,a.text);break}case"strong":{const a=o;n+=e.strong(this.parseInline(a.tokens,e));break}case"em":{const a=o;n+=e.em(this.parseInline(a.tokens,e));break}case"codespan":{const a=o;n+=e.codespan(a.text);break}case"br":{n+=e.br();break}case"del":{const a=o;n+=e.del(this.parseInline(a.tokens,e));break}case"text":{const a=o;n+=e.text(a.text);break}default:{const a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}}class P{options;constructor(t){this.options=t||A}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}}class Ge{defaults=R();options=this.setOptions;parse=this.#e(k.lex,x.parse);parseInline=this.#e(k.lexInline,x.parseInline);Parser=x;Renderer=J;TextRenderer=$;Lexer=k;Tokenizer=_;Hooks=P;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(const r of t)switch(n=n.concat(e.call(this,r)),r.type){case"table":{const o=r;for(const a of o.header)n=n.concat(this.walkTokens(a.tokens,e));for(const a of o.rows)for(const s of a)n=n.concat(this.walkTokens(s.tokens,e));break}case"list":{const o=r;n=n.concat(this.walkTokens(o.items,e));break}default:{const o=r;this.defaults.extensions?.childTokens?.[o.type]?this.defaults.extensions.childTokens[o.type].forEach(a=>{const s=o[a].flat(1/0);n=n.concat(this.walkTokens(s,e))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=e.renderers[o.name];a?e.renderers[o.name]=function(...s){let i=o.renderer.apply(this,s);return i===!1&&(i=a.apply(this,s)),i}:e.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=e[o.level];a?a.unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(e.childTokens[o.name]=o.childTokens)}),r.extensions=e),n.renderer){const o=this.defaults.renderer||new J(this.defaults);for(const a in n.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(a==="options")continue;const s=a,i=n.renderer[s],d=o[s];o[s]=(...l)=>{let u=i.apply(o,l);return u===!1&&(u=d.apply(o,l)),u||""}}r.renderer=o}if(n.tokenizer){const o=this.defaults.tokenizer||new _(this.defaults);for(const a in n.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const s=a,i=n.tokenizer[s],d=o[s];o[s]=(...l)=>{let u=i.apply(o,l);return u===!1&&(u=d.apply(o,l)),u}}r.tokenizer=o}if(n.hooks){const o=this.defaults.hooks||new P;for(const a in n.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(a==="options")continue;const s=a,i=n.hooks[s],d=o[s];P.passThroughHooks.has(a)?o[s]=l=>{if(this.defaults.async)return Promise.resolve(i.call(o,l)).then(p=>d.call(o,p));const u=i.call(o,l);return d.call(o,u)}:o[s]=(...l)=>{let u=i.apply(o,l);return u===!1&&(u=d.apply(o,l)),u}}r.hooks=o}if(n.walkTokens){const o=this.defaults.walkTokens,a=n.walkTokens;r.walkTokens=function(s){let i=[];return i.push(a.call(this,s)),o&&(i=i.concat(o.call(this,s))),i}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return k.lex(t,e??this.defaults)}parser(t,e){return x.parse(t,e??this.defaults)}#e(t,e){return(n,r)=>{const o={...r},a={...this.defaults,...o};this.defaults.async===!0&&o.async===!1&&(a.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),a.async=!0);const s=this.#n(!!a.silent,!!a.async);if(typeof n>"u"||n===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(a.hooks&&(a.hooks.options=a),a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(n):n).then(i=>t(i,a)).then(i=>a.hooks?a.hooks.processAllTokens(i):i).then(i=>a.walkTokens?Promise.all(this.walkTokens(i,a.walkTokens)).then(()=>i):i).then(i=>e(i,a)).then(i=>a.hooks?a.hooks.postprocess(i):i).catch(s);try{a.hooks&&(n=a.hooks.preprocess(n));let i=t(n,a);a.hooks&&(i=a.hooks.processAllTokens(i)),a.walkTokens&&this.walkTokens(i,a.walkTokens);let d=e(i,a);return a.hooks&&(d=a.hooks.postprocess(d)),d}catch(i){return s(i)}}}#n(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const r="<p>An error occurred:</p><pre>"+v(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}}const C=new Ge;function m(h,t){return C.parse(h,t)}m.options=m.setOptions=function(h){return C.setOptions(h),m.defaults=C.defaults,ne(m.defaults),m};m.getDefaults=R;m.defaults=A;m.use=function(...h){return C.use(...h),m.defaults=C.defaults,ne(m.defaults),m};m.walkTokens=function(h,t){return C.walkTokens(h,t)};m.parseInline=C.parseInline;m.Parser=x;m.parser=x.parse;m.Renderer=J;m.TextRenderer=$;m.Lexer=k;m.lexer=k.lex;m.Tokenizer=_;m.Hooks=P;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;x.parse;k.lex;const qe=h=>h.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/[-\s]+/g," ").replace(/^[a-z]/,function(t){return t.toUpperCase()}),Ye=h=>qe(h).split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "),Ze=h=>{const n=m.parse(h).replace(/<\/?[^>]+(>|$)/gm,"").replace(/[\r\n]\s*[\r\n]/gm,"");return Ve(n)},Ve=h=>{let t={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return h.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,n=>t[n])},Qe=({searchResult:h,searchString:t})=>{const n=(s=>s.reduce((d,l)=>{const u=d.findIndex(p=>p.group===l.group);return u===-1?d.push({group:l.group,groupItems:[{frontmatter:{...l.frontmatter},slug:l.slug,content:l.content}]}):d[u].groupItems.push({frontmatter:{...l.frontmatter},slug:l.slug,content:l.content}),d},[]))(h),r=(s,i)=>s.split(new RegExp(`(${i})`,"gi")).map((l,u)=>l.toLowerCase()===i.toLowerCase()?c.jsx("mark",{children:l},u):l),o=(s,i)=>s?.split(new RegExp(`(${i})`,"gi"))?.map((l,u)=>l.toLowerCase()===i.toLowerCase()?c.jsx("span",{className:"underline",children:l},u):l),a=(s,i)=>{const d=Ze(s),l=d.toLowerCase().indexOf(i.toLowerCase());let u=l;for(;u>0&&d[u-1]!==" ";)u--;const p=d.substring(u,i.length+l),g=d.substring(i.length+l,i.length+l+80);return c.jsxs(c.Fragment,{children:[r(p,i),g]})};return c.jsx("div",{className:"search-wrapper-body",children:t?c.jsx("div",{className:"search-result",children:n.length>0?n.map(s=>c.jsxs("div",{className:"search-result-group",children:[c.jsx("p",{className:"search-result-group-title",children:Ye(s.group)}),s.groupItems.map(i=>c.jsxs("div",{id:"searchItem",className:"search-result-item",children:[i.frontmatter.image&&c.jsx("div",{className:"search-result-item-image",children:c.jsx("img",{src:i.frontmatter.image,alt:i.frontmatter.title})}),c.jsxs("div",{className:"search-result-item-body",children:[c.jsx("a",{href:`/${i.slug}`,className:"search-result-item-title search-result-item-link",children:o(i.frontmatter.title,t)}),i.frontmatter.description&&c.jsx("p",{className:"search-result-item-description",children:o(i.frontmatter.description,t)}),i.content&&c.jsx("p",{className:"search-result-item-content",children:a(i.content,t)}),c.jsx("div",{className:"search-result-item-taxonomies",children:i.frontmatter.tags&&c.jsxs("div",{className:"mr-2",children:[c.jsxs("svg",{width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16",children:[c.jsx("path",{d:"M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"}),c.jsx("path",{d:"M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"})]}),i.frontmatter.tags.map((d,l)=>c.jsxs("span",{children:[o(d,t),i.frontmatter.tags&&l!==i.frontmatter.tags.length-1&&c.jsx(c.Fragment,{children:", "})]},d))]})})]})]},i.slug))]},s.group)):c.jsxs("div",{className:"search-result-empty",children:[c.jsxs("svg",{className:"mx-auto",width:"42",height:"42",viewBox:"0 0 47 47",fill:"none",children:[c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.10368 33.9625C9.90104 36.2184 13.2988 37.6547 16.9158 38.0692C21.6958 38.617 26.5063 37.3401 30.3853 34.4939C30.4731 34.6109 30.5668 34.7221 30.6721 34.8304L41.9815 46.1397C42.5323 46.6909 43.2795 47.0007 44.0587 47.001C44.838 47.0013 45.5854 46.692 46.1366 46.1412C46.6878 45.5904 46.9976 44.8432 46.9979 44.064C46.9981 43.2847 46.6888 42.5373 46.138 41.9861L34.8287 30.6767C34.7236 30.5704 34.6107 30.4752 34.4909 30.3859C37.3352 26.5046 38.6092 21.6924 38.0579 16.912C37.6355 13.2498 36.1657 9.81322 33.8586 6.9977L31.7805 9.09214C34.0157 11.9274 35.2487 15.4472 35.2487 19.0942C35.2487 21.2158 34.8308 23.3167 34.0189 25.2769C33.207 27.2371 32.0169 29.0181 30.5167 30.5184C29.0164 32.0186 27.2354 33.2087 25.2752 34.0206C23.315 34.8325 21.2141 35.2504 19.0925 35.2504C16.9708 35.2504 14.8699 34.8325 12.9098 34.0206C11.5762 33.4682 10.3256 32.7409 9.18992 31.8599L7.10368 33.9625ZM28.9344 6.28152C26.1272 4.12516 22.671 2.93792 19.0925 2.93792C14.8076 2.93792 10.6982 4.64009 7.66829 7.66997C4.6384 10.6999 2.93623 14.8093 2.93623 19.0942C2.93623 21.2158 3.35413 23.3167 4.16605 25.2769C4.72475 26.6257 5.4625 27.8897 6.35716 29.0358L4.2702 31.1391C1.35261 27.548 -0.165546 23.0135 0.00974294 18.3781C0.19158 13.5695 2.18233 9.00695 5.58371 5.60313C8.98509 2.19932 13.5463 0.205307 18.3547 0.0200301C22.9447 -0.156832 27.4369 1.32691 31.0132 4.18636L28.9344 6.28152Z",fill:"currentColor"}),c.jsx("path",{d:"M3.13672 39.1367L38.3537 3.64355",stroke:"black",strokeWidth:"3",strokeLinecap:"round"})]}),c.jsxs("p",{className:"mt-4",children:['No results for "',c.jsx("strong",{children:t}),'"']})]})}):c.jsx("div",{className:"py-8 text-center",children:"Type something to search..."})})},en=()=>{const[h,t]=Z.useState(""),e=i=>{t(i.currentTarget.value.replace("\\","").toLowerCase())},n=i=>{const d=new RegExp(`${h}`,"gi");return h===""?[]:i.filter(u=>{const p=u.frontmatter.title.toLowerCase().match(d),g=u.frontmatter.description?.toLowerCase().match(d),b=u.frontmatter.tags?.join(" ").toLowerCase().match(d),y=u.content.toLowerCase().match(d);if(p||y||g||b)return u})},r=performance.now(),o=n(ce),s=((performance.now()-r)/1e3).toFixed(3);return Z.useEffect(()=>{const i=document.getElementById("searchModal"),d=document.getElementById("searchInput"),l=document.getElementById("searchModalOverlay"),u=document.querySelectorAll("#searchItem");document.querySelectorAll("[data-search-trigger]").forEach(y=>{y.addEventListener("click",function(){document.getElementById("searchModal").classList.add("show"),d.focus()})}),l.addEventListener("click",function(){i.classList.remove("show")});let g=-1;const b=()=>{u.forEach((y,w)=>{w===g?y.classList.add("search-result-item-active"):y.classList.remove("search-result-item-active")}),u[g]?.scrollIntoView({behavior:"smooth",block:"nearest"})};document.addEventListener("keydown",function(y){if((y.metaKey||y.ctrlKey)&&y.key==="k"&&(i.classList.add("show"),d.focus(),b()),(y.key==="ArrowUp"||y.key==="ArrowDown")&&y.preventDefault(),y.key==="Escape"&&i.classList.remove("show"),y.key==="ArrowUp"&&g>0)g--;else if(y.key==="ArrowDown"&&g<u.length-1)g++;else if(y.key==="Enter"){const w=document.querySelector(".search-result-item-active a");w&&w?.click()}b()})},[h]),c.jsxs("div",{id:"searchModal",className:"search-modal",children:[c.jsx("div",{id:"searchModalOverlay",className:"search-modal-overlay"}),c.jsxs("div",{className:"search-wrapper",children:[c.jsxs("div",{className:"search-wrapper-header",children:[c.jsxs("label",{htmlFor:"searchInput",className:"absolute left-7 top-[calc(50%-7px)]",children:[c.jsx("span",{className:"sr-only",children:"search icon"}),h?c.jsxs("svg",{onClick:()=>t(""),viewBox:"0 0 512 512",height:"18",width:"18",className:"hover:text-red-500 cursor-pointer -mt-0.5",children:[c.jsx("title",{children:"close icon"}),c.jsx("path",{fill:"currentcolor",d:"M256 512A256 256 0 10256 0a256 256 0 100 512zM175 175c9.4-9.4 24.6-9.4 33.9.0l47 47 47-47c9.4-9.4 24.6-9.4 33.9.0s9.4 24.6.0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6.0 33.9s-24.6 9.4-33.9.0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9.0s-9.4-24.6.0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6.0-33.9z"})]}):c.jsxs("svg",{viewBox:"0 0 512 512",height:"18",width:"18",className:"-mt-0.5",children:[c.jsx("title",{children:"search icon"}),c.jsx("path",{fill:"currentcolor",d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8.0 45.3s-32.8 12.5-45.3.0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9.0 208S93.1.0 208 0 416 93.1 416 208zM208 352a144 144 0 100-288 144 144 0 100 288z"})]})]}),c.jsx("input",{id:"searchInput",placeholder:"Search through my content...",className:"search-wrapper-header-input",type:"input",name:"search",value:h,onChange:e,autoComplete:"off"})]}),c.jsx(Qe,{searchResult:o,searchString:h}),c.jsxs("div",{className:"search-wrapper-footer",children:[c.jsxs("span",{className:"flex items-center",children:[c.jsx("kbd",{children:c.jsx("svg",{width:"14",height:"14",fill:"currentcolor",viewBox:"0 0 16 16",children:c.jsx("path",{d:"M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 011.506.0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 01-.753-1.659z"})})}),c.jsx("kbd",{children:c.jsx("svg",{width:"14",height:"14",fill:"currentcolor",viewBox:"0 0 16 16",children:c.jsx("path",{d:"M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 001.506.0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 00-.753 1.659z"})})}),"to navigate"]}),c.jsxs("span",{className:"flex items-center",children:[c.jsx("kbd",{children:c.jsx("svg",{width:"12",height:"12",fill:"currentcolor",viewBox:"0 0 16 16",children:c.jsx("path",{fillRule:"evenodd",d:"M14.5 1.5a.5.5.0 01.5.5v4.8a2.5 2.5.0 01-2.5 2.5H2.707l3.347 3.346a.5.5.0 01-.708.708l-4.2-4.2a.5.5.0 010-.708l4-4a.5.5.0 11.708.708L2.707 8.3H12.5A1.5 1.5.0 0014 6.8V2a.5.5.0 01.5-.5z"})})}),"to select"]}),h&&c.jsxs("span",{children:[c.jsxs("strong",{children:[o.length," "]})," results - in"," ",c.jsxs("strong",{children:[s," "]})," seconds"]}),c.jsxs("span",{children:[c.jsx("kbd",{children:"ESC"})," to close"]})]})]})]})};export{en as default};
