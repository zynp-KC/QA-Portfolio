# Test Cases: Fastic

## Payment & Paywall

### TC-PAY-001: Verify the spin-wheel discount is applied correctly after dismissing the paywall

- **Priority:** P1
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, onboarding completed, user is on the paywall screen, user is not subscribed
- **Test data:** 12-month plan; advertised discount "63% off forever"
- **Steps:**
  1. On the paywall, tap the "X" button to dismiss it.
  2. On the spin-wheel offer that appears, tap the discounted plan option.
  3. Tap "Continue".
  4. When the payment screen appears, check the applied price.
- **Expected result:** The 63% discount is applied and the "forever" term holds for the renewal price, not only the first period.

### TC-PAY-002: Verify the price shown on the paywall matches the price at the payment screen

- **Priority:** P1
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, onboarding completed, user is on the paywall screen
- **Test data:** 12-month plan, priced at 16.30/week on the paywall
- **Steps:**
  1. On the paywall, tap the "12-month" plan option.
  2. Tap "Continue" to reach the system payment screen.
- **Expected result:** The payment screen price matches the paywall price exactly, same currency and period.

### TC-PAY-003: Verify no charge occurs when the user cancels at the payment screen

- **Priority:** P1
- **Type:** Negative
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, onboarding completed, user has reached the payment screen
- **Test data:** Any paid plan
- **Steps:**
  1. On the paywall, tap a paid plan option.
  2. Tap "Continue" to open the system payment sheet.
  3. When the payment sheet appears, tap "Cancel".
- **Expected result:** No charge is made, no subscription is activated, and the app stays usable.

## Health Plan Generation

### TC-PLAN-001: Verify a warning is shown when an extremely high current weight is entered

- **Priority:** P0
- **Type:** Boundary
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, user on the current-weight step of onboarding
- **Test data:** Current weight = 300 kg
- **Steps:**
  1. On the current-weight step, set the weight value to 300 kg.
  2. Tap "Continue" to move to the next step.
- **Expected result:** A health warning is shown, consistent with the underweight warnings.

### TC-PLAN-002: Verify the plan is adapted or gated for users with contraindicated health conditions

- **Priority:** P0
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, user on the "any health concerns" step
- **Test data:** Conditions selected: Diabetes, Thyroid disease
- **Steps:**
  1. On the "any health concerns" step, tap "Diabetes" and "Thyroid disease".
  2. Tap "Continue".
  3. Complete the remaining onboarding steps.
  4. Open the generated plan.
- **Expected result:** The generated plan reflects the selected health conditions rather than showing the default plan; a warning alone is not enough.

## Data Persistence & Personalization

### TC-DATA-001: Verify onboarding answers are not requested again in later features

- **Priority:** P1
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, onboarding fully completed (dietary restrictions and eating style already answered)
- **Test data:** Dietary restriction and eating style set during onboarding
- **Steps:**
  1. On the main screen, tap the meal planning feature.
  2. Tap through the meal planning setup steps.
- **Expected result:** Already-answered questions are not asked again; previous answers are remembered.

### TC-DATA-002: Verify meal suggestions match the selected dietary restriction

- **Priority:** P1
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, onboarding completed with a diet set
- **Test data:** Dietary restriction = Vegan
- **Steps:**
  1. On the dietary restriction step, tap "Vegan".
  2. Complete the remaining onboarding steps until the generated plan is shown.
  3. On the plan, tap into the meal suggestions.
- **Expected result:** No meal suggestion contains meat, poultry, fish, dairy, eggs, or any other animal-derived ingredient.

### TC-DATA-003: Verify displayed content matches the selected goal

- **Priority:** P1
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, on the goal step of onboarding
- **Test data:** Goal = Gain weight
- **Steps:**
  1. On the goal step, tap "Gain weight".
  2. Tap "Continue" and proceed through the onboarding screens.
- **Expected result:** The content, banners, and questions shown reflect weight gain, not weight loss.

### TC-DATA-004: Verify onboarding answers are preserved when the internet connection is lost mid-flow

- **Priority:** P1
- **Type:** Negative
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, user partway through onboarding (around question 30 of 39)
- **Test data:** Answers entered for the first 30 questions
- **Steps:**
  1. Answer the first 30 onboarding questions.
  2. Open Control Center and enable airplane mode.
  3. Tap "Continue" to attempt the next step, then disable airplane mode.
- **Expected result:** The app does not crash or lose the entered answers; the user can resume from where they left off, with all previous answers retained.

## Input Validation

### TC-VAL-001: Verify the user cannot proceed with a blank weight field

- **Priority:** P2
- **Type:** Negative
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, user on the current-weight step of onboarding
- **Test data:** Weight field left blank
- **Steps:**
  1. On the current-weight step, leave the weight value blank.
  2. Tap "Continue".
- **Expected result:** The app does not proceed; a valid weight is required to continue.

### TC-VAL-002: Verify the app handles the minimum weight value without failure

- **Priority:** P2
- **Type:** Boundary
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, user on the current-weight step of onboarding
- **Test data:** Current weight = minimum selectable value (e.g. 40 kg)
- **Steps:**
  1. On the current-weight step, set the weight value to the lowest selectable value.
  2. Tap "Continue".
- **Expected result:** The app accepts the value without crashing and shows a health warning for the low value. The user can continue only after acknowledging it.

## UI / Interaction

### TC-UI-001: Verify the Continue button does not allow proceeding past unseen options

- **Priority:** P3
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, user on an onboarding question that has more options than fit on screen
- **Test data:** A question whose option list extends below the Continue button
- **Steps:**
  1. Open an onboarding question with a long option list.
  2. Tap "Continue" without scrolling down to the lower options.
- **Expected result:** The Continue button sits below all options, or the list is clearly scrollable, so the user cannot skip options they have not seen.

### TC-UI-002: Verify onboarding screen transitions show no visible performance issues

- **Priority:** P3
- **Type:** Exploratory
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, at the start of onboarding
- **Test data:** None
- **Steps:**
  1. Tap "Continue" to navigate to the next onboarding screen.
  2. Tap the back button to return to the previous screen.
  3. Repeat steps 1 to 2 several times.
- **Expected result:** No visible lag, stutter, and freezing. Smoothness is subjective, so this is an exploratory check rather than a measured threshold.