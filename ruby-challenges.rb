# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudo code: make a method that takes in 2 arguments. Use select to filter and iterate through the array, use .includes to pick what charactes go in the new subset. The added ? will return a false if the letter is not present in the array element. It'll not be included in the subset.
# Print the method with the array and var letter as arguments.

# def word_find (array, char)
#     temp_arr = array.select do |word| word.include?(char) 
#     end
# end

# p   word_find(beverages_array,filter_letter_o)
# p   word_find(beverages_array,filter_letter_t)



# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code: make a function alphabetized in a hash. create an empty array.
# shovel all values into the result
# return flatten result array and sort it

# Pseudo code 2: create a method that takes in a hash.
# transform the values in the hash into an array to remove the hash brackets. concatinate the arrays to make 1 array and sort for it to be alphabetized. 

# Wasn't able to finish </3


# def sorted_hash hash
#     return hash.transform_values.sort
# end
#     p sorted_hash(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudo code: make a class 
# create an initialized method with model,wheels and speed
# initialize val of wheels to 2
# initialize default val of 0
# use the attr acessor to pass in the symbols before initialize 
# create bike info method
# return a sentence with all data from bike object with a streing interpolated message


# class bike 
#     attr_accessor :model, :wheels, :current_speed
#     def initialize (model)
#         @model = model
#         @wheels = 2
#         @current speed = 0
#     end

#     

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.



# Pseudo code: add some logic into a method to the pedal and brake to increase or decrease the integers when called upon. Add 0].max to make sure the integer never goes below 0 when braking.

attr_writer :current_speed

def speed_increment 
    @current_speed
end

def speed_decrement
    @current_speed
end