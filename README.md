# WSON

WhiteSpace JSON - JSON but every character is whitespace. Config files now readable by nobody!! 👍🏻

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

Which is why I made WSON - the only (as far as I can tell, nobody else would bother to make this) way to encode your JSON config files so that they *only use whitespace characters*.

The days of pesky, readable JSON files are no more. The possibilities are endless:

* Store your database passwords in a format nobody will bother to read
* Impress your friends with your cool, mysterious configuration files
* Even build your own web server using WSON documents for API calls!

## Wow, sign me up! How do I use this thing?

Install