export type ServiceDetail = {
  approach: [string, string][]
  visit: string[]
  faqs: [string, string][]
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'pediatric-home-care-gapp': {
    approach: [
      ['A care plan built with you', 'We start by listening to your family’s routines, your child’s needs, and your goals, then write a plan everyone can follow.'],
      ['Consistent caregivers', 'We aim to keep the same caregivers with your child so routines feel familiar and trust has time to grow.'],
      ['Help with the GAPP process', 'We can explain the steps and paperwork involved and point you to the right next step.'],
    ],
    visit: ['The caregiver arrives and reviews notes from the last visit', 'Support with your child’s daily routines and personal care', 'Comfort and activities that fit your child’s day', 'Notes shared with the family before the visit ends'],
    faqs: [
      ['Does my child need to be approved for GAPP first?', 'Approval is handled through the state program. We can walk you through the steps and help you understand where your family is in the process.'],
      ['Can I meet the caregiver before care starts?', 'Yes. We encourage introductions so you and your child feel comfortable.'],
    ],
  },
  'behavioral-care-autism': {
    approach: [
      ['Strengths first', 'We focus on what your child does well and build support from there.'],
      ['Predictable routines', 'Consistent schedules and gentle transitions help the day feel calmer.'],
      ['Parents as partners', 'You know your child best. We follow their communication style and the strategies that already work at home.'],
    ],
    visit: ['A warm greeting and a check-in on how your child is today', 'Support with routines, transitions, and daily activities', 'Patient encouragement using strategies your family prefers', 'A short summary for parents at the end of the visit'],
    faqs: [
      ['Is this therapy?', 'Our caregivers provide in-home behavioral support. We explain exactly what is and is not included during your consultation.'],
      ['Will you follow our existing routines?', 'Yes. We learn your routines and the strategies other providers use so your child gets consistent support.'],
    ],
  },
  'senior-and-elder-care': {
    approach: [
      ['Independence first', 'We help with what is hard and leave room for what your loved one still enjoys doing.'],
      ['Familiar routines', 'Meals, rest, and activities are kept close to the way your loved one likes them.'],
      ['Family kept in the loop', 'You get regular updates so you are never guessing how the day went.'],
    ],
    visit: ['A friendly check-in and a look at the day’s plan', 'Help with personal care, meals, and mobility as needed', 'Conversation, activities, and light household support', 'A note for the family about how the visit went'],
    faqs: [
      ['How often can visits happen?', 'Schedules are flexible and set during your consultation, from a few hours a week to more regular support.'],
      ['Can care change as needs change?', 'Yes. We review the plan regularly and adjust it with you.'],
    ],
  },
  'veteran-care': {
    approach: [
      ['Respect for service', 'We take time to learn each veteran’s story, preferences, and the way they like to be supported.'],
      ['Dignity and choice', 'Care is built around the veteran’s routines and decisions.'],
      ['Family guidance', 'We help families understand their options and the questions to ask.'],
    ],
    visit: ['A respectful greeting and a conversation about the day', 'Personal care and routine support', 'Errands, meals, or companionship as planned', 'Updates shared with the family'],
    faqs: [
      ['Do you help with VA benefits?', 'We help families understand their options and point them toward the right resources.'],
      ['Can family members be involved?', 'Yes. Family communication is part of every care plan.'],
    ],
  },
  'skilled-nursing-for-children': {
    approach: [
      ['Care that follows the plan', 'Nursing support follows your child’s care plan and the orders provided by their doctor.'],
      ['Clear communication', 'Nurses keep you informed about how your child’s day went.'],
      ['Family involved', 'We explain what we are doing and why, so you stay confident and in control.'],
    ],
    visit: ['The nurse reviews the care plan and recent notes', 'Skilled support provided according to the plan', 'Comfort, routines, and play that fit your child’s day', 'A summary shared with the family'],
    faqs: [
      ['What can nurses do in the home?', 'It depends on your child’s doctor’s orders and the care plan. We review these with you before care starts.'],
      ['Do nurses work with my child’s doctor?', 'Our nurses follow the plan and orders provided and keep the family informed.'],
    ],
  },
  'personal-care-services': {
    approach: [
      ['Privacy and respect', 'Personal tasks are handled calmly, with attention to comfort and dignity.'],
      ['Your pace', 'Care follows your loved one’s preferences, not a rushed checklist.'],
      ['A routine that fits', 'We build care around the time of day that works best.'],
    ],
    visit: ['A check-in on how the person is feeling', 'Help with bathing, grooming, dressing, or toileting as needed', 'Support moving safely around the home', 'Notes for the family when the visit ends'],
    faqs: [
      ['Can my loved one choose their caregiver?', 'We match caregivers by skills and personality and welcome feedback if a change would help.'],
      ['Is care available every day?', 'Scheduling is flexible and set during your consultation.'],
    ],
  },
  'companionship-social-support': {
    approach: [
      ['Real connection', 'We spend time on conversation and shared interests, not just tasks.'],
      ['Activities they enjoy', 'Games, music, hobbies, and walks fit around what brings joy.'],
      ['Peace of mind for families', 'You know someone friendly is there and checking in.'],
    ],
    visit: ['A warm hello and time to chat', 'A shared activity such as cards, music, or a walk', 'A snack or meal together if wanted', 'A short update to the family'],
    faqs: [
      ['Is companionship care the same as personal care?', 'No. Companionship focuses on connection and company. Personal care can be added if needed.'],
      ['Can the same companion visit regularly?', 'We aim for consistency so a real relationship can form.'],
    ],
  },
  'meal-preparation-nutrition': {
    approach: [
      ['Your preferences', 'We cook what your loved one likes and follow any dietary directions the family gives us.'],
      ['Easy planning', 'We help build simple weekly menus and grocery lists.'],
      ['Mealtime company', 'Eating together makes meals more enjoyable.'],
    ],
    visit: ['Review of preferences and any dietary notes', 'Meal preparation in your kitchen', 'Help with eating if needed, then kitchen clean-up', 'A note on what was eaten and what is running low'],
    faqs: [
      ['Can you follow a special diet?', 'We follow the directions the family or doctor provides. We do not set diets or give medical advice.'],
      ['Do caregivers shop for groceries?', 'Errands can be added to the plan.'],
    ],
  },
  'medication-reminders': {
    approach: [
      ['Gentle, consistent reminders', 'Reminders happen at the times set in the care plan.'],
      ['Clear records for family', 'Notes are shared so family always knows how the day went.'],
      ['Clear limits', 'Caregivers remind. They do not make medication decisions or change doses.'],
    ],
    visit: ['The caregiver checks the schedule shared by the family', 'A friendly reminder at the planned time', 'A note about whether the reminder was followed', 'A message to the family if something looks off'],
    faqs: [
      ['Can caregivers give medication?', 'Our reminder service is limited to reminders. What caregivers can do beyond that depends on their role and your care plan.'],
      ['What if a dose is missed?', 'We tell the family promptly so they can contact the doctor or pharmacist.'],
    ],
  },
  'mobility-transfer-assistance': {
    approach: [
      ['Safety first', 'Caregivers use steady, careful methods when helping someone move.'],
      ['Confidence building', 'Encouragement helps people trust their own movement.'],
      ['Home awareness', 'We note trip hazards and share simple fixes with the family.'],
    ],
    visit: ['A check-in on how the person is feeling today', 'Help moving from bed, chair, or car', 'Walking and positioning support', 'A short report on anything the family should know'],
    faqs: [
      ['Do caregivers use equipment?', 'They can work with equipment already in the home, such as walkers or transfer belts.'],
      ['Is this physical therapy?', 'No. Caregivers assist with daily movement. They do not replace a therapist.'],
    ],
  },
  'light-housekeeping-home-safety': {
    approach: [
      ['A calmer home', 'Tidy, organized spaces are easier and safer to live in.'],
      ['Simple safety habits', 'Clear walkways, tidy cords, and reachable items matter.'],
      ['Done your way', 'We follow how the household likes things done.'],
    ],
    visit: ['A walkthrough of that day’s priorities', 'Light tidying, dishes, and laundry', 'Linen changes and trash', 'Notes about anything that needs attention'],
    faqs: [
      ['Is this a full cleaning service?', 'It is light housekeeping to keep the home comfortable. Deep cleaning is not included.'],
      ['Can this be combined with other services?', 'Yes. Many families pair it with personal care or meal preparation.'],
    ],
  },
  'respite-care-families': {
    approach: [
      ['A real break', 'You can rest, run errands, or simply recharge, knowing your loved one is supported.'],
      ['Familiar routines', 'We follow your routines so nothing feels disruptive.'],
      ['Flexible scheduling', 'Hours can be planned around when you need a break most.'],
    ],
    visit: ['A hand-off conversation so the caregiver knows the plan', 'Support with routines and activities while you are away', 'Check-ins shared with you if you wish', 'A summary when you return'],
    faqs: [
      ['How short can a respite visit be?', 'Schedules are flexible and set during your consultation.'],
      ['Can we try it once before committing?', 'Talk to us about what makes sense for your family.'],
    ],
  },
  'dementia-memory-care': {
    approach: [
      ['Calm and patient', 'Caregivers use a gentle tone and give time to respond.'],
      ['Routine and familiarity', 'Predictable days reduce confusion and stress.'],
      ['Supporting the family', 'We share what we notice and listen to what works for your loved one.'],
    ],
    visit: ['A warm, familiar greeting', 'Support with meals, personal care, and routines', 'Gentle activities such as music, photos, or walks', 'Notes on mood and routine shared with the family'],
    faqs: [
      ['Are caregivers trained in memory care?', 'Caregivers receive training in patient, respectful support.'],
      ['Can care happen overnight?', 'Ask us about availability.'],
    ],
  },
  'transportation-errands': {
    approach: [
      ['Out and about safely', 'Caregivers help with getting in and out of the car and the building.'],
      ['Appointments made easier', 'Planning ahead means fewer stressful mornings.'],
      ['Staying connected', 'Regular outings help people stay part of their community.'],
    ],
    visit: ['Plan the outing and the route together', 'Help getting ready and out the door', 'Support at the store, appointment, or event', 'Help getting home and a note to the family'],
    faqs: [
      ['Do caregivers drive?', 'Transportation arrangements are confirmed during your consultation.'],
      ['Can a caregiver stay during appointments?', 'Yes, with the family’s approval and the provider’s consent.'],
    ],
  },
}