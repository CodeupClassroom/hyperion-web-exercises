// AJAX - Asynchronous JavaScript and XML (We aren't going to worry much about the XML part for this course).

// AJAX requests will often employ the use of an API, or JSON file and return us information using JavaScript Object Notation (JSON).

// A JSON object will often look like this:

var obj = {
    "key": "value",
    "number": 45,
    "arr": [1,2,3]
};

// Notice that the largest difference is the keys are strings (in quotes).

console.log(obj.key);

// We still interact with this object just the same.

// Let's make an API call to get some AJAX going.

$.get('https://pokeapi.co/api/v2/pokemon/dragonite').done(function(info) {
    console.log(info);
});

$.get("https://swapi.dev/api/people/12").done(function (resp) {
    console.log(resp);
})

// BAD PRACTICE DON'T DO THIS PLEASE. YOU WILL MAKE A DAVID CRY T-T

var tim;

$.ajax('https://pokeapi.co/api/v2/pokemon/chansey').done(function(info) {
    tim = info;
});

setTimeout(function() {
    console.log(tim);
}, 1500);


// End of bad practice.



// So this is an event listener I have used before...

// $('#submit').click(function(e) {
//     e.preventDefault();
//     var val = $('input').val().toLowerCase();
//     console.log(val);
//     if (val === 'pikachu') {
//         $('#picture-example').html('<img class="push old-pics" src="img/pikachu.gif" alt="pikachu gif">');
//     } else if (val === 'dragonite') {
//         $('#picture-example').html('<img class="push old-pics" src="img/dragonite.gif" alt="dragonite gif">');
//     } else {
//         $('#picture-example').html('<img class="push old-pics" src="img/you-were-close.png" alt="you were close">');
//     }
// });

// Notice how when we submit our form, it will fire a get request to the page. If we want the behavior we were looking for, we'll need to prevent the default behavior of a button in our form.

let calls = 0;

$('#submit').click(function(e) {
    e.preventDefault();
    if (calls < 6) {
        $('#picture-example').html('<img src="img/Wedges-3s-200px.svg" alt="loading" class="kazuya">');
        var val = $('input').val().toLowerCase();
        if (val === 'dream team') {
            $('#picture-example').html("");
            let failure = false;
            $.ajax('https://pokeapi.co/api/v2/pokemon/dragonite').done(function (resp) {
                $('#picture-example').append('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
                $.ajax('https://pokeapi.co/api/v2/pokemon/feraligatr').done(function (resp) {
                    $('#picture-example').append('<img class="push over" src="' + resp.sprites.front_default + '" alt="' + val + '">');
                    $.ajax('https://pokeapi.co/api/v2/pokemon/nidoking').done(function (resp) {
                        $('#picture-example').append('<img class="push over2" src="' + resp.sprites.front_default + '" alt="' + val + '">');
                        $.ajax('https://pokeapi.co/api/v2/pokemon/mamoswine').done(function (resp) {
                            $('#picture-example').append('<img class="push over3" src="' + resp.sprites.front_default + '" alt="' + val + '">');
                            $.ajax('https://pokeapi.co/api/v2/pokemon/sylveot').done(function (resp) {
                                $('#picture-example').append('<img class="push syl" src="' + resp.sprites.front_default + '" alt="' + val + '">');
                                $.ajax('https://pokeapi.co/api/v2/pokemon/sandslash').done(function (resp) {
                                    $('#picture-example').append('<img class="push slash" src="' + resp.sprites.front_default + '" alt="' + val + '"><h4>These are David\'s favorite Pokémon.</h4>');
                                }).fail(function () {
                                    failure = true;
                                });
                            }).fail(function () {
                                failure = true;

                                if (failure) {
                                    $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="Someone done goofered"><h4 class="pull">David can\'t spell the names of his favorite Pokémon. Oppsies.</h4>');
                                }
                            });
                        }).fail(function () {
                            failure = true;

                            if (failure) {
                                $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="Someone done goofered"><h4 class="pull">David can\'t spell the names of his favorite Pokémon. Oppsies.</h4>');
                            }
                        });
                    }).fail(function () {
                        failure = true;

                        if (failure) {
                            $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="Someone done goofered"><h4 class="pull">David can\'t spell the names of his favorite Pokémon. Oppsies.</h4>');
                        }
                    });
                }).fail(function () {
                    failure = true;

                    if (failure) {
                        $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="Someone done goofered"><h4 class="pull">David can\'t spell the names of his favorite Pokémon. Oppsies.</h4>');
                    }
                });
            }).fail(function () {
                failure = true;

                if (failure) {
                    $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="Someone done goofered"><h4 class="pull">David can\'t spell the names of his favorite Pokémon. Oppsies.</h4>');
                }
            });

        } else if (val === 'dark magician') {
            $('#picture-example').html('<img class="dark-magician" src="img/dark-magician.png" alt="' + val + ' is not a Pokémon"><h4>The Dark Magician is not a Pokémon.</h4>');
        } else if (val === 'kazuya') {
            $('#picture-example').html('<img class="kazuya" src="img/kazuya.gif" alt="' + val + ' is not a Pokémon"><h4>Kazuya Mishima is not a Pokémon.</h4>');
        } else if (val === 'type: null' || val === "type:null" || val === 'typenull' || val === 'type null') {
            $.ajax('https://pokeapi.co/api/v2/pokemon/type-null').done(function (resp) {
                $('#picture-example').html('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
            }).fail(function () {
                $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "' + val + '" is not a Pokémon.</h4>');
            });
        } else if (val.split(" ").length >= 2) {
            $.ajax('https://pokeapi.co/api/v2/pokemon/' + val.split(" ").join("-")).done(function (resp) {
                $('#picture-example').html('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
            }).fail(function () {
                $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "' + val + '" is not a Pokémon.</h4>');
            });
        } else {
            $.ajax('https://pokeapi.co/api/v2/pokemon/' + val.split("'").join("")).done(function (resp) {
                $('#picture-example').html('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
                console.log(resp);
            }).fail(function () {
                $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "' + val + '" is not a Pokémon.</h4>');
            }).always(function () {
                calls++;
            });
        }
    } else {
        alert("No! No more API calls for you today.");
    }
});

// $('#submit').click(function(e) {
//     e.preventDefault();
//     $('#picture-example').html('<img src="img/Wedges-3s-200px.svg" alt="loading" class="kazuya">');
//     var val = $('input').val().toLowerCase();
//     if (val === 'dream team') {
//         $('#picture-example').html("");
//         $.ajax('https://pokeapi.co/api/v2/pokemon/dragonite').done(function (resp) {
//             $('#picture-example').append('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         });
//         $.ajax('https://pokeapi.co/api/v2/pokemon/feraligatr').done(function (resp) {
//             $('#picture-example').append('<img class="push over" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//             });
//         $.ajax('https://pokeapi.co/api/v2/pokemon/nidoking').done(function (resp) {
//             $('#picture-example').append('<img class="push over2" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         });
//         $.ajax('https://pokeapi.co/api/v2/pokemon/mamoswine').done(function (resp) {
//             $('#picture-example').append('<img class="push over3" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         });
//         $.ajax('https://pokeapi.co/api/v2/pokemon/sylveon').done(function (resp) {
//             $('#picture-example').append('<img class="push syl" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         });
//         $.ajax('https://pokeapi.co/api/v2/pokemon/sandslash').done(function (resp) {
//             $('#picture-example').append('<img class="push slash" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         });
//     } else if (val.includes('dark magician')) {
//         $('#picture-example').html('<img class="dark-magician" src="img/dark-magician.png" alt="' + val + ' is not a Pokémon"><h4>The Dark Magician is not a Pokémon.</h4>');
//     } else if (val === 'kazuya') {
//         $('#picture-example').html('<img class="kazuya" src="img/kazuya.gif" alt="' + val + ' is not a Pokémon">');
//     } else if (val === 'type: null' || val === "type:null" || val === 'typenull' || val === 'type null') {
//         $.ajax('https://pokeapi.co/api/v2/pokemon/type-null').done(function (resp) {
//             $('#picture-example').html('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         }).fail(function() {
//             $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "'+ val +'" is not a Pokémon.</h4>');
//         });
//     } else if (val.split(" ").length >= 2) {
//         $.ajax('https://pokeapi.co/api/v2/pokemon/' + val.split(" ").join("-")).done(function (resp) {
//             $('#picture-example').html('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         }).fail(function() {
//             $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "'+ val +'" is not a Pokémon.</h4>');
//         });
//     } else {
//         $.ajax('https://pokeapi.co/api/v2/pokemon/' + val.split("'").join("")).done(function (resp) {
//             $('#picture-example').html('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         }).fail(function() {
//             $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "'+ val +'" is not a Pokémon.</h4>');
//         });
//     }
// });

