/**
 * Utility to extract YouTube Video ID and construct a privacy-friendly, frame-safe embed URL.
 * Supports various formats:
 * - Standard Watch URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ
 * - Shortened URL: https://youtu.be/dQw4w9WgXcQ
 * - Embed URL: https://www.youtube.com/embed/dQw4w9WgXcQ
 * - Shorts URL: https://youtube.com/shorts/dQw4w9WgXcQ
 * - Mobile Watch URL: https://m.youtube.com/watch?v=dQw4w9WgXcQ
 * - Plain Video ID: dQw4w9WgXcQ
 * 
 * @param {string} url - Any YouTube URL or Video ID
 * @returns {string} The formatted nocookie embed URL
 */
export const getYoutubeEmbedUrl = (url) => {
  if (!url) return '';
  const cleanUrl = url.trim();
  
  let videoId = '';
  
  // Try regex matching first for robust extraction
  const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  const match = cleanUrl.match(regExp);
  
  if (match && match[1] && match[1].length === 11) {
    videoId = match[1];
  } else {
    // Fallback manual splitting
    if (cleanUrl.includes('v=')) {
      videoId = cleanUrl.split('v=')[1]?.split('&')[0];
    } else if (cleanUrl.includes('youtu.be/')) {
      videoId = cleanUrl.split('youtu.be/')[1]?.split('?')[0]?.split('&')[0];
    } else if (cleanUrl.includes('/embed/')) {
      videoId = cleanUrl.split('/embed/')[1]?.split('?')[0]?.split('&')[0];
    } else if (cleanUrl.includes('/shorts/')) {
      videoId = cleanUrl.split('/shorts/')[1]?.split('?')[0]?.split('&')[0];
    }
  }

  // Handle plain 11-char ID
  if (!videoId && cleanUrl.length === 11 && !cleanUrl.includes('/') && !cleanUrl.includes('?')) {
    videoId = cleanUrl;
  }

  if (videoId && videoId.length === 11) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  return cleanUrl;
};
