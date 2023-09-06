import {Product, ProductResolved} from "./product";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {EMPTY, Observable, of} from "rxjs";
import {ProductService} from "./product.service";
import {catchError, map} from "rxjs/operators";
import {error} from "@angular/compiler-cli/src/transformers/util";
@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductResolved>{
  constructor(private productService: ProductService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> {
    //recuperiamo il prodotto
    // uso strict false vabene questo
    // const id: number = +route.paramMap.get('id');
    // return this.productService.getProduct(id);
    // se uso strict a true devo gestire il caso in cui può essere nullo o undefined
    const id = route.paramMap.get('id');
    if (id) {
      if (isNaN(+id)) {
        const message=  `Product id was not a number : ${id}`;
        console.error(message);
        return of({product: null, error: message});
      } else {
        return this.productService.getProduct(+id)
          .pipe(
            map(product => ({product:product})),
            catchError(error => {
              const message = `Retrieval error: ${error}`;
              console.log(message);
              return of({product:null , error: message})
            })
          );
      }
    } else {
      return EMPTY;
    }


  }

}
