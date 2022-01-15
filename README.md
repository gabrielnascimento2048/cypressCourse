# cypressCourse

Close container 

Open cmd and write:
<pre><code>docker container ls</code></pre>

Press enter and copy the CONTAINER ID, which refer docker image.


Then, execute the command.
<pre><code>docker container stop [CONTAINER ID]</code></pre>




> Note: After shut down the image, If want to run again run this <pre><code>`docker run --publish 80:80 --publish 22:22 --hostname localhost wlsf82/gitlab-ce`</code></pre>
> waiting loading environment, then open  http://localhost/, for define pass and user <strong>root</strong>. 
> 
<p>Don't forget to set up <strong>cypress.env.json</strong> with :</p>

<pre><code>{
    "user_name": "root",
    "user_password": "password,
    "gitlab_access_token": "access-token-TBD"
}
</code></pre>

details about how generate ssh key and access-token: http://localhost/help/ssh/README#generating-a-new-ssh-key-pair
