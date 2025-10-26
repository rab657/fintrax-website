# Video Setup for Fintrax Website

## Video File Required

To enable video functionality in the hero section, you need to add a video file to the `public` folder:

### File Location
Place your video file at: `/public/demo-video.mp4`

### Recommended Specifications
- **Format**: MP4 (H.264 encoding for best browser compatibility)
- **Resolution**: 1920x1080 (1080p) or higher
- **Duration**: 30 seconds to 3 minutes recommended
- **File Size**: Keep under 50MB for optimal page load times
- **Aspect Ratio**: 16:9

### Video Content Suggestions
- Product demo showing Fintrax AI in action
- Walkthrough of the proof of wealth automation process
- Customer testimonials or case studies
- Feature highlights and benefits demonstration

### Alternative Video Sources
You can also use an external video URL by modifying the `hero.tsx` component to accept videos from:
- YouTube (embedded)
- Vimeo (embedded)
- Cloud video services (AWS S3, Cloudflare Stream, etc.)

### Current Implementation
The hero section currently:
- Shows a placeholder image with a play button
- When clicked, displays the video with native HTML5 video controls
- Falls back gracefully if no video file is present

### Testing
After adding your video file:
1. The page should load normally
2. Clicking the play button in the hero section should start video playback
3. The video should have native browser controls (play, pause, volume, fullscreen)
