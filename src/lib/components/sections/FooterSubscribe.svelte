<div>
    <div>
        <p class="font-bold">Subscribe to our newsletter</p>
        <p>Stay ahead in tech! Subscribe now for exclusive updates on mentorship, courses, and hackathons. Join our dynamic community and access valuable insights straight to your inbox. Don't miss out – subscribe today!</p>
        <form>
            <div>
                <input type="email" placeholder="Type your email..." name="email">
                <div class="error">
                    Please enter a valid email
                </div>
            </div>
            <input type="submit" value="Subscribe">
        </form>
    </div>
</div>

<style>
    .error {
        display: none;
    }

    input:invalid + .error {
        display: initial;
        color: red;
        font-style: italic;
    }
</style>