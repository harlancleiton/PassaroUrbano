import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'reducedDescription'
})

export class ReducedDescription implements PipeTransform {
    transform(text: string): string {
        if (text.length > 15) {
            return text.substr(0, 25) + '...'
        }
        else {
            return text
        }
    }
}