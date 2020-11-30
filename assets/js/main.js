$(document).ready(function(){
    const imageCollection = [
        {
            link: 'https://images.unsplash.com/photo-1606223226391-c267641c318c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
            color: '#808e9b'
        },
        {
            link: 'https://images.unsplash.com/photo-1606172750354-9da20dca5c4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            color: '#f1c40f'
        },
        {
            link: 'https://images.unsplash.com/photo-1606147247011-14da9b793e9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
            color: '#3498db'
        },
        {
            link: 'https://images.unsplash.com/photo-1606240174396-db59a75e6705?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            color: '#c0392b'
        },
        {
            link: 'https://images.unsplash.com/photo-1597481726007-4d27456cdec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
            color: '#cd6133'
        }
    ]


    const settings = {
        duration : '2500',
        random: false
    }

    
    var prevButton = $('.prev'),
        images = $('.slide'),
        index = 0,
        icons = $('.buttons'),
        slideCount = imageCollection.length,
        interval,
        nextButton = $('.next');

    autoSlider(settings);    

    nextButton.click(function(e){
        index++;
        showSlide(index);
        console.log(index);
    })

    prevButton.click(function(){
        index--;
        showSlide(index);
        console.log(index);
    })

    icons.mouseover(function(){
        clearInterval(interval);
    })

    icons.mouseleave(function(){
        autoSlider(settings);
    })

    

    function autoSlider(settings){

        var prev;
        interval = setInterval(function(){
            
            if(settings.random){
                do{
                    index = Math.floor(Math.random() * slideCount);
    
                }while(index == prev)
                prev = index;
                console.log(index)
                
            }

            else{
                if(slideCount == index){
                    index = 0;
                }
                index++;
                console.log(index);
            }

            showSlide(index);

        },settings.duration)
    }

    function showSlide(i){
        index = i;

        if(i<0){
            index= slideCount-1;
        }
        
        if(i>=slideCount){
            index = 0;
        }

        images.css('background-image', 'url('+imageCollection[index].link+')');
        icons.css('color',imageCollection[index].color);
    }
});