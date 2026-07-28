# Test Cases: Fastic

## Payment & Paywall

### TC-PAY-001: Verify the spin-wheel discount is applied correctly after dismissing the paywall

- **Priority:** P1
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, onboarding completed, user is on the paywall screen, user is not subscribed
- **Test data:** 12-month plan; advertised discount "63% off forever"
- **Steps:**
  1. On the paywall, tap the "X" to dismiss it.
  2. When the spin-wheel offer appears, select the discounted plan.
  3. Proceed to the payment screen.
- **Expected result:** The 63% discount is applied and the "forever" term holds for the renewal price, not only the first period.

### TC-PAY-002: Verify the price shown on the paywall matches the price at the payment screen

- **Priority:** P1
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, onboarding completed, user is on the paywall screen
- **Test data:** 12-month plan, priced at 16.30/week on the paywall
- **Steps:**
  1. On the paywall, select the 12-month plan.
  2. Proceed to the system payment screen.
- **Expected result:** The payment screen price matches the paywall price exactly, same currency and period.

### TC-PAY-003: Verify no charge occurs when the user cancels at the payment screen

- **Priority:** P1
- **Type:** Negative
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, onboarding completed, user has reached the payment screen
- **Test data:** Any paid plan
- **Steps:**
  1. From the paywall, select a paid plan and proceed to the system payment screen.
  2. Cancel the payment by dismissing the payment sheet.
- **Expected result:** No charge is made, no subscription is activated, and the app stays usable.

## Health Plan Generation

### TC-PLAN-001: Verify a warning is shown when an extremely high current weight is entered

- **Priority:** P0
- **Type:** Boundary
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, user on the current-weight step of onboarding
- **Test data:** Current weight = 300 kg
- **Steps:**
  1. Enter 300 kg as the current weight.
  2. Proceed to the next step.
- **Expected result:** A health warning is shown, consistent with the underweight warnings.

### TC-PLAN-002: Verify the plan is adapted or gated for users with contraindicated health conditions

- **Priority:** P0
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, user on the "any health concerns" step
- **Test data:** Conditions selected: Diabetes, Thyroid disease
- **Steps:**
  1. Select the listed health conditions.
  2. Complete onboarding through to the generated plan.
- **Expected result:** The generated plan reflects the selected health conditions rather than showing the default plan; a warning alone is not enough.

## Data Persistence & Personalization

### TC-DATA-001: Verify onboarding answers are not requested again in later features

- **Priority:** P1
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, onboarding fully completed
- **Test data:** Dietary restriction and eating style set during onboarding
- **Steps:**
  1. From the main screen, open meal planning.
  2. Go through its setup steps.
- **Expected result:** Already-answered questions are not asked again; previous answers are remembered.

### TC-DATA-002: Verify meal suggestions match the selected dietary restriction

- **Priority:** P1
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, onboarding completed with a diet set
- **Test data:** Dietary restriction = Vegan
- **Steps:**
  1. Complete onboarding through to the generated plan.
  2. Open the plan's meal suggestions.
- **Expected result:** No meal suggestion contains meat, poultry, fish, dairy, eggs, or any other animal-derived ingredient.

### TC-DATA-003: Verify displayed content matches the selected goal

- **Priority:** P1
- **Type:** Functional
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, on the goal step of onboarding
- **Test data:** Goal = Gain weight
- **Steps:**
  1. Select "Gain weight" as the goal.
  2. Continue through onboarding.
- **Expected result:** The content, banners, and questions shown reflect weight gain, not weight loss.

### TC-DATA-004: Verify onboarding answers are preserved when the internet connection is lost mid-flow

- **Priority:** P1
- **Type:** Negative
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, user partway through onboarding (around question 30 of 39)
- **Test data:** Answers entered for the first 30 questions
- **Steps:**
  1. Answer the first 30 onboarding questions.
  2. Disable the internet connection (enable airplane mode).
  3. Attempt to continue onboarding, then re-enable the connection.
- **Expected result:** The app does not crash or lose the entered answers; the user can resume from where they left off, with all previous answers retained.

## Input Validation

### TC-VAL-001: Verify the user cannot proceed with a blank weight field

- **Priority:** P2
- **Type:** Negative
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, user on the current-weight step of onboarding
- **Test data:** Weight field left blank
- **Steps:**
  1. Leave the weight field blank.
  2. Attempt to proceed to the next step.
- **Expected result:** The app does not proceed; a valid weight is required to continue.

### TC-VAL-002: Verify the app handles the minimum weight value without failure

- **Priority:** P2
- **Type:** Boundary
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, user on the current-weight step of onboarding
- **Test data:** Current weight = minimum selectable value (e.g. 40 kg)
- **Steps:**
  1. Set the current weight to the lowest selectable value.
  2. Proceed to the next step.
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
  2. Attempt to proceed using the Continue button without scrolling.
- **Expected result:** The Continue button sits below all options, or the list is clearly scrollable, so the user cannot skip options they have not seen.

### TC-UI-002: Verify onboarding screen transitions show no visible performance issues

- **Priority:** P3
- **Type:** Exploratory
- **Environment:** iPhone 13, iOS 26.5.2, Fastic 1.266.0
- **Preconditions:** App installed, at the start of onboarding
- **Test data:** None
- **Steps:**
  1. Move forward and backward through several onboarding screens.
- **Expected result:** No visible lag, stutter, and freezing. Smoothness is subjective, so this is an exploratory check rather than a measured threshold.