import json

# Load JSON data
with open("categorized_game_data.json") as json_file:
    games = json.load(json_file)

# Load iframe text file
with open("iframes.txt") as iframe_file:
    iframes = iframe_file.read().splitlines()

# Iterate over games and iframes
for game, iframe in zip(games, iframes):
    # Replace special characters in iframe
    iframe = iframe.replace("&quot;", "\"")

    # Create HTML content
    html_content = f"""<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css" media="screen">
    <title>{game['title']}</title>

</head>

<body>
    <header>
        <button type="button" class="home">
            <h1>{game['title']}</h1>
        </button>
    </header>

    <ul class="nav">
        <li><a href="../CoolMathGames.html">HOME</a></li>
    </ul>

    <div class="game-container">
        {iframe}
    </div>
    <div class="center">
        <form id="comment-form" class="Comments">
            <h1>Add Comment</h1>
            <input type="text" id="name" name="name" placeholder="Your name">
            <textarea id="comment-input" name="comment" placeholder="Your comment"></textarea>
            <button type="submit" id="post-comment-btn">Submit</button>
        </form>
        <div id="comments-list"></div>
    </div>
    <script src="comments.js"></script>
</body>

</html>"""

    # Write HTML content to a file
    with open(f"{game['name']}.html", "w") as html_file:
        html_file.write(html_content)
