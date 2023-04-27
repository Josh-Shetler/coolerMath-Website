import json
import random

# List of available categories
categories = ["Puzzle", "Strategy", "Sandbox", "Simulation", "Action", "Rpg"]

# Load JSON data
with open("updated_game_data.json") as json_file:
    games = json.load(json_file)

# Assign random categories to each game
for game in games:
    game['category'] = random.choice(categories)

# Save updated JSON data to a new file
with open("categorized_game_data.json", "w") as output_file:
    json.dump(games, output_file, indent=4)
