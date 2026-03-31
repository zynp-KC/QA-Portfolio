# Spotify — Exploratory Testing Session

## Test Details
- App: Spotify
- Device: iPhone 13
- Platform: iOS
- Test Type: Exploratory Testing
- Test Date: 30 March 2026

## Test Areas & Observations

### 1. Search
- 250 character limit enforced with color indicator ✅
- Input validation works correctly
- Note: Indicator color inconsistent across sessions
    (red on Day 1, green on Day 2 - same theme)⚠️

### 2. Playlist Management
- Empty playlist name -> auto-filled with default name ✅
- Playlist name limited to 100 characters ✅
- Good input validation overall

### 3. Offline Behavior
- Previously streamed songs play offline (cached) ✅
- Never-played songs require internet connection ✅
- UX Issue: No clear indicator showing which songs are cached vs not cached ⚠️

### 4. Orientation
- App does not support landscape mode
- Stays in portrait regardless of device rotation ⚠️
- No user notification about this limitation

### 5. Account Settings
- Username cannot be changed
- No clear message informing the user about this ⚠️

## Summary
No critical bugs found. Spotify demonstrates strong input validation and consistent behavior. However, four UX observations were noted that could improve user experience.

| Observation | Severity | Type |
|-------------|----------|------|
| No landscape mode support | Low | UX |
| Cached songs not indicated | Low | UX |
| Username change not available/explained | Low | UX |
| Inconsistent character limit indicator color | Low | Bug |