// const text = process.argv.filter((_, i) => i > 1).join(" ");
const text = "Tiada hari tanpa.*%^@#$& ngoding,"
console.log({ text });

// normal space to snake_case
const snake_case = String(text)
.trim()
.replace(/[^A-z\s\d][\\\^]?/g, "")
.toLowerCase()
.split(" ")
.join("_")
console.log({snake_case});

// normal space to CamelCase
const camel_case = String(text)
.trim()
.replace(/[^A-z\s\d][\\\^]?/g, "")
.toLowerCase()
.split(" ")
.map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1)
})
.join("")
console.log({camel_case});

// snake_case to normal space
const snake_to_normal = String(snake_case)
.split("_")
.join(" ")
console.log({snake_to_normal});

// split CamelCase to normal case
const camel_to_normal = String(camel_case)
.replace(/([A-Z])/g,' $1')
.trim()
console.log({camel_to_normal});