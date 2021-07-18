# Whitespace JSON

Whitespace JSON - JSON but every character is whitespace. Config files now readable by nobody!! 👍🏻

[![npm version](https://badge.fury.io/js/whitespace-json.svg)](https://npmjs.com/package/whitespace-json)

## Wait, what?

Ever looked at a config file, you know, one like this:

```
{
  "web-app": {
    "servlet": [
      {
        "servlet-name": "cofaxCDS",
        "servlet-class": "org.cofax.cds.CDSServlet",
      }
    ]
  }
}
```

And thought to yourself, wow, that's great and all but I wish this config file looked more like this:

```
 
         	   ​ ​   ⠀ 
                   ⠀ 
 
                 	 
   	     ⠀                                      	             ⠀        
          
       
                             
```

Yeah? Neither have I!

Which is why I made Whitespace JSON - the only (as far as I can tell, nobody else would bother to make this) way to encode your JSON config files so that they *only use whitespace characters*.

The days of pesky, readable JSON files are no more. The possibilities are endless:

* Store your database passwords in a format nobody will bother to read
* Impress your friends with your cool, mysterious configuration files
* Even build your own web server using WSON documents for API calls, and delight your users!

## Wow, sign me up! How do I use this thing?

That's the best part - you shouldn't!

Alright, if you insist - install via NPM:

`npm i whitespace-json`

Then import it like this:

```
const { parse, stringify } = require('whitespace-json');

const thisIsWhitespace = stringify("Don't say I didn't warn you");

const backToNormal = parse(thisIsWhitespace);
```

Godspeed my friend.
