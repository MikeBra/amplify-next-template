import { Amplify } from "aws-amplify"
import outputs from "@/config/amplify_outputs.json"

export function configureAmplify() {
	Amplify.configure(outputs)
}
