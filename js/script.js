var nouns = ["Hero", "Mystic", "Mage", "Miner", "Farmer", "Poet", "Courier", "Cook", "Carpenter", "Huntsman", "Hunter", "Blacksmith", "Alchemist", "Adventurer", "Artisan", "Writer", "Traveler", "Enchanter", "Enchantress", "Wizard", "Witch", "Patron", "King", "Queen", "Noble", "Knight", "Jester", "Sage", "Aegis", "Sword", "Shield", "Bow", "Staff", "Arrow", "Axe", "Guard", "Alembic", "Cup", "Pitcher", "Glass", "Mug", "Stein", "Tap", "Spigot", "Respite", "Waypoint", "Nook", "Cranny", "Bounty", "Familiar", "Animal", "Crown", "Raven", "Cat", "Dog", "Wolf", "Bear", "Rat", "Eagle", "Hawk", "Pig", "Dove", "Goat", "Ram", "Bat", "Owl", "Turtle", "Snake", "Viper", "Serpent", "Rabbit", "Deer", "Horse", "Elk", "Weasel", "Fang", "Claw", "Wing", "Feather", "Scale", "Horn", "Halo", "Concoction", "Giant", "Elf", "Human", "Dwarf", "Gnome", "Mixture", "Jewel", "Spirit", "Throne", "Court", "Spouse", "Husband", "Wife", "Gate", "Web", "Path", "Trail", "Father", "Mother", "Flower", "Lily", "Daisy", "Rose", "Maid", "Butler", "Seer", "Mask", "Masquerade", "Lady", "Lord", "Lover", "Cottage", "Farm", "Heart", "Table", "Bar", "Tavern", "Rest", "Carriage", "Fern", "Shackle", "Warrior", "Bard", "Barbarian", "Sorcerer", "Cleric", "Warlock", "Dragon", "Wyrm", "Mimic", "Villa", "Hammer", "Star", "Sun", "Moon", "Wheel", "Hook", "Spear", "Scabbard", "Garden", "Automaton", "Cog", "Wrench", "Screw", "Bolt", "Luck", "Devil", "Demon", "Ring"];
var container = document.getElementById("Tavern_Name");
var randomnumber1;
var randomnumber2;
function generateRichName() {
    var name;
    var richName = ["Elite", "Poised", "Gilded", "Golden", "Jeweled", "Ruby", "Jade", "Garnet", "Amethyst", "Crystal", "Sapphire", "Diamond", "Silver", "Opulent", "Ornate", "Splendid", "Graceful", "Flowery", "Luxurious", "Emerald", "Posh", "Extravagant", "Grand", "Lush", "Lavish", "Pampered", "Luscious", "Majestic", "Grandiose", "Stately", "Lofty", "Gallant", "Brilliant", "Ritzy", "Classy", "Refined", "Kingly", "King's", "Queenly", "Queen's", "Lord's", "Lady's", "Scholar's", "Scholarly", "Elaborate", "Elegant", "Dignified", "Regal", "Royal", "Noble", "Noble's", "Magnificent", "Deluxe", "Illustrious", "Glorious", "Esteemed", "Exalted", "Prestigous", "Fine", "Fancy", "Adorned", "Sparkling", "Dazzling", "Prosperous", "Resplendent", "Luminous", "Vivid", "Radiant", "Starry", "Sunny", "Twilight", "Twilit", "Moonlit", "Sunlit", "Bright", "Starlit", "Silvery", "Immaculate", "Knight's", "Crowned", "Valiant", "Heroic", "Mystical", "Shimmering", "Arcane", "Marvelous", "Frosted", "Sophisticated", "Ethereal", "Mature", "Exultant", "Flawless", "Silken", "Dapper", "Tranquil"];
    randomnumber1 = Math.floor(Math.random() * (richName.length));
    randomnumber2 = Math.floor(Math.random() * (nouns.length));
    name = 'The ' + richName[randomnumber1] + ' ' + nouns[randomnumber2];
    container.innerHTML = name;
}
function generateMidName() {
    var name;
    var midName = ["Stubborn", "Rainy", "Thirsty", "Crystal", "Steel", "Zippy", "Dizzy", "Tranquil", "Soft", "Warm", "Zealous", "Quaint", "Mature", "Novel", "Marvelous", "Sleepy", "Sleeping", "Slumbering", "Silver", "Gilded", "Twilight", "Copper", "Bashful", "Tapped", "Brazen", "Brass", "Valiant", "Chilly", "Heroic", "Bold", "Stalwart", "Dreaming", "Blind", "Misty", "Mystical", "Rustic", "Arcane", "Sly", "Wise", "Spectral", "Grizzled", "Grizzly", "Smoky", "Onyx", "Frosty", "Wild", "Raging", "Plain", "Fluttering", "Rough", "Parched", "Peppy", "Ethereal", "Fumbling", "Jittery", "Clumsy", "Lively", "Exultant", "Nimble", "Metal", "Metallic", "Whispering", "Shiny", "Resolute", "Humble", "Lowly", "Calm", "Bizzare", "Sassy", "Dashing", "Testy", "Alluring", "Fierce", "Firey", "Sturdy", "Hungry", "Plucky", "Tender", "Sneaky", "Poised", "Stumbling", "Iron", "Spotted"];
    randomnumber1 = Math.floor(Math.random() * (midName.length));
    randomnumber2 = Math.floor(Math.random() * (nouns.length));
    name = 'The ' + midName[randomnumber1] + ' ' + nouns[randomnumber2];
    container.innerHTML = name;
}
function generatePoorName() {
    var name;
    var poorName = ["Stubborn", "Butchered", "Rainy", "Stormy", "Sloven", "Stumbling", "Firey", "Craven", "Condemned", "Testy", "Callous", "Lonely", "Lone", "Rebellious", "Rabid", "Jagged", "Lowly", "Nimble", "Vulgar", "Metal", "Metallic", "Whispering", "Sleazy", "Sorid", "Spiteful", "Bent", "Cheap", "Plain", "Disheveled", "Bitter", "Raging", "Wild", "Onyx", "Obsidian", "Twilight", "Moonlit", "Sunlit", "Drunken", "Drunk", "Scarred", "Smoked", "Smoky", "Shrouded", "Enshrouded", "Brazen", "Copper", "Brass", "Silver", "Frigid", "Cloaked", "Thief's", "Poison", "Dead", "Jailed", "Chained", "Shackled", "Rusty", "Rusted", "Shadowy", "Sullen", "Ashen", "Crooked", "Crook's", "Blooded", "Bloody", "Cross", "Blind", "Dim", "Bold", "Grizzled", "Grizzly", "Sleepy", "Sleeping", "Crimson", "Hazy", "Dark", "Taboo", "Murky", "Misty", "Somber", "Wicked", "Vile", "Dour", "Bleak", "Occult", "Veiled", "Drenched", "Sly", "Grave", "Foggy", "Vexed", "Thorned", "Thorny", "Drowned", "Stained", "Lead", "Seedy", "Stingy", "Lying", "Parched", "Greedy", "Thirsty", "Prickly", "Troubled", "Hissing", "Limping", "Hungry", "Dead Man's", "Rough", "Dizzy", "Steel", "Iron"];
    randomnumber1 = Math.floor(Math.random() * (poorName.length));
    randomnumber2 = Math.floor(Math.random() * (nouns.length));
    name = 'The ' + poorName[randomnumber1] + ' ' + nouns[randomnumber2];
    container.innerHTML = name;
}
function surprise() {
    var number = Math.floor(Math.random() * 3);
    if(number = 0)
    {
        container.innerHTML = 5+5;
        generateRichName();
    }
    if(number = 1)
    {
        container.innerHTML = 7-5;
        generateMidName();
    }
    if(number = 2)
    {
        container.innerHTML = 3+5;
        generatePoorName();
    }
    
}
function owner() {
    var owner;
    var bodyHeight = ["short", "very short", "very tall", "tall", "an average height"];
    var bodyType = ["portly", "lean", "bulky", "chubby", "scrawny", "an average weight"];
    var personality = ["calm", "seductive", "loud", "quiet", "meek", "angry", "rude", "solemn", "dorky", "bossy", "smug", "stubborn", "serious", "jokey", "cheery", "kind", "bored", "apathetic", "lively", "snobby", "humble", "friendly"];
    var quirks = [" speak with a slight stutter.", " have an embarrassing tattoo.", " only wear glass jewelry.", " doesn't understand sarcasm.", " sarcastic.", " sober.", " have a slight limp.", " always have a torn left sleeve.", " love to gossip.", " a werewolf.", " have an uncanny memory.", " was an orphan.", " have a kid", " know a noble, personally.", " very superstitious", " frequently clean their glasses", " have an evil sounding laugh.", " use slang incorrectly.", " hum to themself.", " hold grudges.", " have a weakness for sweets.", " dislike sweets.", " collect rocks.", " collect trinkets.", " an avid reader.", " dislike reading.", " have vocal fry.", " quotes things incorrectly.", " laugh at their own jokes.", " have a fear of spiders.", " have a fear of cats.", " have a fear of dogs.", " afraid of the dark.", " have a monotone voice.", " dislike eating in front of others.", " believe in a wild conspiracy theory.", " will not eat food they didn't make.", " will not drink something they didn't pour.", " love riddles.", " speak in rhymes.", " love puns.", " doesn't understand puns.", " talk with their hands.", " a minimalist.", " a maximalist.", " always misprounouces a certain word.", " doesn't curse.", " love spicy food.", " love card tricks.", " love doing card tricks.", " a gambler.", " does not like gambling.", " whistle to themself", " have a terrible sense of direction.", " pretend to be stupid.", " pretend to be smart.", " love stormy weather.", " afraid of thunder.", " mutter to themself while working.", " vain.", " frequently check their appearance.", " an eavesdropper.", " smell pleasant.", " have a soft laugh.", " have a loud laugh.", " have aphantasia.", " love coffee.", " have a love for stray animals.", " always sneezes in twos.", " a terrible liar.", " never lies.", " a compulsive liar.", " always a little early.", " always a little late.", " a bit absent-minded.", " always using metaphors.", " a slow talker.", " a fast talker."];
    var randomnumber3;
    var randomnumber4;
    randomnumber1 = Math.floor(Math.random() * (bodyHeight.length));
    randomnumber2 = Math.floor(Math.random() * (bodyType.length));
    randomnumber3 = Math.floor(Math.random() * (personality.length));
    randomnumber4 = Math.floor(Math.random() * (quirks.length));

    owner = 'The owner is ' + bodyHeight[randomnumber1] + ' and ' + bodyType[randomnumber2] + '. They are ' + personality[randomnumber3] + ' and ' + quirks[randomnumber4];
    document.getElementById("Owner_Name").innerHTML = owner;
}

document.getElementById("Rich").addEventListener("click", generateRichName, false);
document.getElementById("Middle").addEventListener("click", generateMidName, false);
document.getElementById("Poor").addEventListener("click", generatePoorName, false);
document.getElementById("Surprise").addEventListener("click", surprise, false);
document.getElementById("Owner").addEventListener("click", owner, false);
