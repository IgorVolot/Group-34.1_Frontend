queryDatabase({userName: 'John'}, (err, user) => {
    // handle errors
    const avatar = user.avatar_url;
    getImageByUrl(`photohosting.com/q=${avatar}`, (err, image) => {
        // handle errors
        transformImage(image, (err, transformedImage) => {
            // handle errors
            sendEmail(user.email, err => {
                // handle errors
                logTask(`transformed the avatar image and sent ${user.email}`, err => {
                    // handle errors
                })
            })
        })
    })
})

// Callback Hell
// Pyramid of Doom