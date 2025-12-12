function ueScrollMarquee(){
  
  //classes
  
  //selectors
  
  
  //objects
  var g_objWidget, g_objWrapper;
  
  //helpers
  var g_widgetId, g_itemsArray, g_widgetsOptions, g_speed, g_direction, g_offset;
  
  /**
  * on page scroll
  */
  function onScroll(){
    var scrollY = jQuery(this).scrollTop();
    var direction = -1;

    if(g_direction == "right")
      direction = 1;

    g_objWrapper.css('transform', 'translateX(' + (direction * scrollY * g_speed + g_offset) + 'px)');    
  }  
    
  /**
  * init from external file   
  */
  this.init = function(options){        
    //init vars
    g_itemsArray = options.items;
    g_widgetsOptions = options.widgetsOptions;
    g_widgetId = g_widgetsOptions.uc_id;        
    g_speed = Number(g_widgetsOptions.speed);        
    g_direction = g_widgetsOptions.direction;        
    g_offset = Number(g_widgetsOptions.offset);        
    
    //classes
    
    //selectors
    
    
    //objects
    g_objWidget = jQuery('#'+g_widgetId);
    g_objWrapper = g_objWidget.find(".uc-items-wrapper");

    
    //helpers 
    
    //init events
    jQuery(window).on("scroll", onScroll);
  }   
}