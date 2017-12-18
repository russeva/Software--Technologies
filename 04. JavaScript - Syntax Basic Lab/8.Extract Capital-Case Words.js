function extractWords(entry) {
   /*Joins the elements of an array into a string*/
    let inputText = entry.join(",");

    /*Split the elements with a RegEx*/
    let wordsOnly = inputText.split(/W+/);

    /*Filter uppercase words*/
    let nonEmptyWords = wordsOnly.filter(w => w.length > 0);
    let upWords = nonEmptyWords.filter(x => x.toUpperCase() == x);
    /*Print on the console*/
    console.log(upWords.join(", "));
}

}
extractWords('We start by HTML, CSS, JavaScript, JSON and REST.',
    'Later we touch some PHP, MySQL and SQL.',
    'Later we play with C#, EF, SQL Server and ASP.NET MVC.',
    'Finally, we touch some Java, Hibernate and Spring.MVC.');