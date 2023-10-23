/*********** Hexo Plugin: hexo-post-replace *********** 
 *    _____       _                         _         * 
 *   / ____|     | |                       | |        * 
 *  | (___  _   _| | ____      ____ _ _ __ | |_ ___   * 
 *   \___ \| | | | |/ /\ \ /\ / / _` | '_ \| __/ __|  * 
 *   ____) | |_| |   <  \ V  V / (_| | | | | |_\__ \  * 
 *  |_____/ \__,_|_|\_\  \_/\_/ \__,_|_| |_|\__|___/  * 
 *                                                    * 
 ****************** Made By Sukwants ******************/


const config = hexo.config.post_replace;

hexo.extend.filter.register('before_post_render', function(data){
  if (config.before) {
    for (const key in config.before) {
      data.content = data.content.replaceAll(key, config.before[key]);
    }
  }
  return data;
});

hexo.extend.filter.register('after_post_render', function(data){
  if (config.after) {
    for (const key in config.after) {
      data.content = data.content.replaceAll(key, config.after[key]);
    }
  }
  return data;
});
