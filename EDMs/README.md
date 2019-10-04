# EDM

## About Email template

There are a bunch of great email template resources out there but I find most of them overkill for the use cases I have. Sometimes I just want a really simple email with a clear call to action.
<br/>
Introducing the really simple html email template. I started off with [Sample1](/edms-template/template1.html) basic email template or with complicated email [Sample2](/edms-template/template2.html) stripped it down to the bare bones and made some minor modifications.

## How To Use It (And Inline CSS)

Unfortunately most email clients require your CSS to be inline. Or at least it should be inline if you want it to look right.
<br/>
If you’re using a marketing service like Campaign Monitor or Mailchimp, they will usually put your CSS inline for you, so you can use the **email.html** template as is.

When editing a campaign here are five things to remember to ensure your templates work well across multiple email clients:

* Using `<table>`. Think of most email clients as ‘old school’. That is, coding for email clients is almost like coding for the web in 1999. When it comes to email, tables can give you a lot of quick wins, including centred text, borders, spacing and so on. Embrace them, even though you probably wouldn’t on your website.

* Use proper CSS. Don’t take shortcuts! An example is using #ccc instead of #cccccc when using hex colours. Using full CSS, such as `“font: 12px/14px Arial,sans-serif;”` is good practice. Check out the w3schools tutorials for easy to understand guides on how your CSS should look.

* Test your templates. If you’ve never used [Litmus](https://litmus.com/) or [EmailOnAcid](https://www.emailonacid.com/), now is a good time to start. Litmus is a fantastic tool for checking your email templates across all sorts of email clients. If you’re trying to get the best possible coversion rates on your email I’d highly recommend using one of these tools.

* Get your links and buttons right. When creating buttons in templates it’s often a good idea to use a table instead of a button image. This will ensure the button area is editable also means that your button will show whether images are on or off. After all, it’s best to make your call to action as strong as possible! For coloring links, one trick is to include the style inline and also to include a span with the same colour inside the link tag. Consider this a worthwhile extra precaution

* The images name don't have spacing. 
