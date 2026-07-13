# Resolved Allowed Memory Size Exhausted

*Category from The Events Calendar documentation*

---

## Resolving the “Allowed memory size exhausted” notice in WordPress

**Source:** [https://docs.nexcess.com/software/the-events-calendar/resolved-allowed-memory-size-exhausted/](https://docs.nexcess.com/software/the-events-calendar/resolved-allowed-memory-size-exhausted/)

```
"PHP message: PHP Fatal error: Allowed memory size of 268435456 bytes exhausted (tried to allocate 655360 bytes) in /www/site1/public/wp-includes/class-wp-object-cache.php on line 319"
```

This message means that the memory allocated to your website is not enough to run your WordPress site with your chosen theme and all your active plugins.

**This error is not specific to any one plugin. It is instead the sum of it all.**

Imagine you are Santa and cannot leave on your sleigh ride without your bag and all the gifts in it. Your helper elves start to fill the bag with gifts in random order. If there are too many gifts, the bag will eventually be filled, and no more will fit, but there are still some lying around. You also cannot leave (continue your work) because you are not able to take all the gifts with you and you don’t have time to come back for them later.

Your lead helper elf comes over and says:

*Santa, your have a gigantic bag that can fit a gazillion things. We started packing it, but we cannot fit in little Zach’s gift and whoever else is after him on the list any more. You cannot leave!*

So you’re stuck.

You can either reduce the number of gifts (put more kids on the naughty list?) or get a bigger bag.

Now, let’s see the real-world version.

## Dissecting the error message

```
"Allowed memory size of 268435456 bytes exhausted"
```

 means your site has 268,435,456 bytes = 256 megabytes of memory available, which is not enough for everything you have.

*(To calculate megabytes from bytes, just divide the big number by 1,024 two times.)*

If you want to check how much memory your website can use, you can also do that under Tools → Site Health → Info → Server section → PHP Memory Limit. Here is a [screenshot](https://docs.nexcess.com/wp-content/uploads/2026/06/site-health-server-info.jpg) of that section.

```
(tried to allocate 655360 bytes)
```

 means that the next thing in line would have needed 0.625 MB of memory, but it wasn’t available. This number will likely be different in every scenario.

```
in /www/site1/public/wp-includes/class-wp-object-cache.php on line 319
```

 This will also be different in every scenario. The folder or file name can throw people off, and they might think that the plugin mentioned is the cause of this error. Not exactly. As things were being loaded into the memory, this is where the memory got full.

## Solutions

There are two solutions to this:

### Decrease the number of plugins used on the site

Usually, this is more difficult to do, but it’s a valid option.

Review your plugins; if there are some you don’t really need, deactivate and delete them. You could also try to find alternative plugins which use less memory.

Changing the theme to one that doesn’t have all the bells and whistles or deactivating some theme features, like deactivating a custom post type that is not used, might also help.

### Increase the available memory

This is probably easier to do, but it might incur costs, depending on your provider and the amount of memory you need.

This is not a WordPress setting. You might be able to change the allocated PHP memory through your cPanel or hosting dashboard, or you can ask your hosting provider to help you with it.

---

