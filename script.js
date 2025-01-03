document.getElementById('fetchBtn').addEventListener('click',async()=>{
    const username=document.getElementById('username').value.trim();
    const userDetails=document.getElementById('userDetails');

    if(!username){
        userDetails.innerHTML='<p>Please enter a username.</p>';
        return
    }
    // const token="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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"
    const apiUrl=`https://api.github.com/users/${username}`;

    await fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            userDetails.innerHTML = '<p><strong>User not found</strong></p>';
            throw new Error('User not found'); 
        }
        return response.json(); 
    })
    
    .then(data=>{
        userDetails.innerHTML=
        `<h2>${data.name || 'User is not present with the provided username.'}</h2>
        <img src="${data.avatar_url}" alt="${data.name}" width="150">
        <p><strong>Username:</strong> ${data.login}</p>
        <p><strong>Bio:</strong> ${data.bio || 'No bio available'}</p>
        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
        
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><strong>Following:</strong> ${data.following}</p>
       <p><a href="${data.blog || '#'}" target="_blank">${data.blog ? 'View Blog' : 'Blog : Nothing to show'}</a></p>
        <p><a href="${data.html_url}" target="_blank">View Repos on GitHub</a></p>
      `;
        
    })
    .catch(error => {
        userDetails.innerHTML = '<p><strong>Not available!</strong></p>';
    });


    
})

