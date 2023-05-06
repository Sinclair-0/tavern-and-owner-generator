var nouns = ["Hero", "Mystic", "Mage", "Miner", "Farmer", "Poet", "Courier", "Cook", "Carpenter", "Huntsman", "Hunter", "Blacksmith", "Alchemist", "Adventurer", "Artisan", "Writer", "Traveler", "Enchanter", "Enchantress", "Wizard", "Witch", "Patron", "King", "Queen", "Noble", "Knight", "Jester", "Sage", "Aegis", "Sword", "Shield", "Bow", "Staff", "Arrow", "Axe", "Guard", "Alembic", "Cup", "Pitcher", "Glass", "Mug", "Stein", "Tap", "Spigot", "Respite", "Waypoint", "Nook", "Cranny", "Bounty", "Familiar", "Animal", "Crown", "Raven", "Cat", "Dog", "Wolf", "Bear", "Rat", "Eagle", "Hawk", "Pig", "Dove", "Goat", "Ram", "Bat", "Owl", "Turtle", "Snake", "Viper", "Serpent", "Rabbit", "Deer", "Horse", "Elk", "Weasel", "Fang", "Claw", "Wing", "Feather", "Scale", "Horn", "Halo", "Concoction", "Giant", "Elf", "Human", "Dwarf", "Gnome", "Mixture", "Jewel", "Spirit", "Throne", "Court", "Spouse", "Husband", "Wife", "Gate", "Web", "Path", "Trail", "Father", "Mother", "Flower", "Lily", "Daisy", "Rose", "Maid", "Butler", "Seer", "Mask", "Masquerade", "Lady", "Lord", "Lover", "Cottage", "Farm", "Heart", "Table", "Bar", "Tavern", "Rest", "Carriage", "Fern", "Shackle", "Warrior", "Bard", "Barbarian", "Sorcerer", "Cleric", "Warlock", "Dragon", "Wyrm", "Mimic", "Villa", "Hammer", "Star", "Sun", "Moon", "Wheel", "Hook", "Spear", "Scabbard", "Garden", "Automaton", "Cog", "Wrench", "Screw", "Bolt", "Luck", "Devil", "Demon", "Ring"];
var container = document.getElementById("Tavern_Name");
var randomnumber1;
var randomnumber2;
var name;
function generateName()
{
    var bodyHeight = ["short", "tall", "an average height"];
    var bodyType = ["portly", "lean", "bulky", "scrawny", "an average weight"];
    var personality = ["calm", "seductive", "loud", "quiet", "meek", "angry", "rude", "solemn", "dorky", "bossy", "smug", "stubborn", "serious", "jokey", "cheery", "kind", "bored", "apathetic", "lively", "snobby", "humble", "friendly"];
    var quirks = [" speaks with a slight stutter.", " has an embarrassing tattoo.", " only wears glass jewelry.", " doesn't understand sarcasm.", " is sarcastic.", " is sober.", " has a slight limp.", " always has a torn left sleeve.", " loves gossip.", " is a werewolf.", " has an uncanny memory.", " was an orphan.", " has a kid", " knows a noble, personally.", " is superstitious", " frequently cleans their glasses", " has an evil (sounding) laugh.", " uses slang, incorrectly.", " hums frequently.", " holds grudges.", " has a weakness for sweets.", " dislikes sweets.", " collects rocks.", " collects trinkets.", " is an avid reader.", " dislikes reading.", " has vocal fry.", " quotes things frequently, often incorrectly.", " laughs at their own jokes.", " has a fear of spiders.", " has a fear of cats.", " has a fear of dogs.", " is afraid of the dark.", " has a monotone voice.", " dislikes eating in front of others.", " believes in a wild conspiracy theory.", " will not eat food they didn't make.", " will not drink something they didn't pour.", " loves riddles.", " speaks in rhyme.", " loves puns.", " doesn't understand puns.", " talks with their hands.", " is a minimalist.", " is a maximalist.", " always misprounouces a certain word.", " doesn't curse.", " loves spicy foods.", " loves card tricks.", " loves doing card tricks.", " is a gambler.", " does not like gambling.", " whistles to themselves", " has a terrible sense of direction.", " pretends to be stupid.", " pretends to be smart.", " loves stormy weather.", " is afraid of thunder.", " mutters small onomatopoeia noises to themselves while working.", " is vain.", " frequently checking/fixing appearance.", " eavesdrops.", " smells pleasant.", " has a soft laugh.", " has a loud laugh.", " has aphantasia.", ];
}
function generateRichName()
{
    var name;
    var richName = ["Elite", "Poised", "Gilded", "Golden", "Jeweled", "Ruby", "Jade", "Garnet", "Amethyst", "Crystal", "Sapphire", "Diamond", "Silver", "Opulent", "Ornate", "Splendid", "Graceful", "Flowery", "Luxurious", "Emerald", "Posh", "Extravagant", "Grand", "Lush", "Lavish", "Pampered", "Luscious", "Majestic", "Grandiose", "Stately", "Lofty", "Gallant", "Brilliant", "Ritzy", "Classy", "Refined", "Kingly", "King's", "Queenly", "Queen's", "Lord's", "Lady's", "Scholar's", "Scholarly", "Elaborate", "Elegant", "Dignified", "Regal", "Royal", "Noble", "Noble's", "Magnificent", "Deluxe", "Illustrious", "Glorious", "Esteemed", "Exalted", "Prestigous", "Fine", "Fancy", "Adorned", "Sparkling", "Dazzling", "Prosperous", "Resplendent", "Luminous", "Vivid", "Radiant", "Starry", "Sunny", "Twilight", "Twilit", "Moonlit", "Sunlit", "Bright", "Starlit", "Silvery", "Immaculate", "Knight's", "Crowned", "Valiant", "Heroic", "Mystical", "Shimmering", "Arcane", "Marvelous", "Frosted", "Sophisticated", "Ethereal", "Mature", "Exultant", "Flawless", "Silken", "Dapper", "Tranquil"];
    randomnumber1 = Math.floor(Math.random() * (richName.length));
    randomnumber2 = Math.floor(Math.random() * (nouns.length));
    name = 'The ' + richName[randomnumber1] + ' ' + nouns[randomnumber2];
    container.innerHTML = name;
}
function generateMidName()
{
    var name;
    var midName = ["Stubborn", "Rainy", "Thirsty", "Crystal", "Steel", "Zippy", "Dizzy", "Tranquil", "Soft", "Warm", "Zealous", "Quaint", "Mature", "Novel", "Marvelous", "Sleepy", "Sleeping", "Slumbering", "Silver", "Gilded", "Twilight", "Copper", "Bashful", "Tapped", "Brazen", "Brass", "Valiant", "Chilly", "Heroic", "Bold", "Stalwart", "Dreaming", "Blind", "Misty", "Mystical", "Rustic", "Arcane", "Sly", "Wise", "Spectral", "Grizzled", "Grizzly", "Smoky", "Onyx", "Frosty", "Wild", "Raging", "Plain", "Fluttering", "Rough", "Parched", "Peppy", "Ethereal", "Fumbling", "Jittery", "Clumsy", "Lively", "Exultant", "Nimble", "Metal", "Metallic", "Whispering", "Shiny", "Resolute", "Humble", "Lowly", "Calm", "Bizzare", "Sassy", "Dashing", "Testy", "Alluring", "Fierce", "Firey", "Sturdy", "Hungry", "Plucky", "Tender", "Sneaky", "Poised", "Stumbling", "Iron", "Spotted"];
    randomnumber1 = Math.floor(Math.random() * (midName.length));
    randomnumber2 = Math.floor(Math.random() * (nouns.length));
    name = 'The ' + midName[randomnumber1] + ' ' + nouns[randomnumber2];
    container.innerHTML = name;
}
function generatePoorName()
{
    var name;
    var poorName = ["Stubborn", "Butchered", "Rainy", "Stormy", "Sloven", "Stumbling", "Firey", "Craven", "Condemned", "Testy", "Callous", "Lonely", "Lone", "Rebellious", "Rabid", "Jagged", "Lowly", "Nimble", "Vulgar", "Metal", "Metallic", "Whispering", "Sleazy", "Sorid", "Spiteful", "Bent", "Cheap", "Plain", "Disheveled", "Bitter", "Raging", "Wild", "Onyx", "Obsidian", "Twilight", "Moonlit", "Sunlit", "Drunken", "Drunk", "Scarred", "Smoked", "Smoky", "Shrouded", "Enshrouded", "Brazen", "Copper", "Brass", "Silver", "Frigid", "Cloaked", "Thief's", "Poison", "Dead", "Jailed", "Chained", "Shackled", "Rusty", "Rusted", "Shadowy", "Sullen", "Ashen", "Crooked", "Crook's", "Blooded", "Bloody", "Cross", "Blind", "Dim", "Bold", "Grizzled", "Grizzly", "Sleepy", "Sleeping", "Crimson", "Hazy", "Dark", "Taboo", "Murky", "Misty", "Somber", "Wicked", "Vile", "Dour", "Bleak", "Occult", "Veiled", "Drenched", "Sly", "Grave", "Foggy", "Vexed", "Thorned", "Thorny", "Drowned", "Stained", "Lead", "Seedy", "Stingy", "Lying", "Parched", "Greedy", "Thirsty", "Prickly", "Troubled", "Hissing", "Limping", "Hungry", "Dead Man's", "Rough", "Dizzy", "Steel", "Iron"];
    randomnumber1 = Math.floor(Math.random() * (poorName.length));
    randomnumber2 = Math.floor(Math.random() * (nouns.length));
    name = 'The ' + poorName[randomnumber1] + ' ' + nouns[randomnumber2];
    container.innerHTML = name;
}
function surprise()
{
    var number = Math.floor(Math.random() * 3);
    if(number = 1)
        generateRichName();
    if(number = 2)
        generateMidName();
    if(number = 3)
        generatePoorName();
    
}

document.getElementById("Rich").addEventListener("click", generateRichName, false);
document.getElementById("Middle").addEventListener("click", generateMidName, false);
document.getElementById("Poor").addEventListener("click", generatePoorName, false);
document.getElementById("Surprise").addEventListener("click", surprise, false);
